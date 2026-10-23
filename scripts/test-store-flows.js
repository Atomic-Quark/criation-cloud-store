import { strict as assert } from "assert";
import { paymentGateway, detectCardBrand, formatCardNumber, formatExpiry } from "../src/services/paymentGateway.ts";

console.log("\n=======================================================");
console.log("   CRIATION CLOUD STORE — AUTOMATED VERIFICATION SUITE  ");
console.log("=======================================================\n");

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}`);
    console.error("   ", err.message);
    failed++;
  }
}

async function runAsyncTests() {
  console.log("1. Payment Gateway & Card Formatting Tests:");

  test("detectCardBrand identifies Visa", () => {
    assert.equal(detectCardBrand("4242 4242 4242 4242"), "Visa");
  });

  test("detectCardBrand identifies Mastercard", () => {
    assert.equal(detectCardBrand("5300 1234 5678 9012"), "Mastercard");
  });

  test("detectCardBrand identifies American Express", () => {
    assert.equal(detectCardBrand("3782 822463 10005"), "American Express");
  });

  test("formatCardNumber groups digits into 4s", () => {
    assert.equal(formatCardNumber("4242424242424242"), "4242 4242 4242 4242");
  });

  test("formatExpiry inserts slash in MM/YY", () => {
    assert.equal(formatExpiry("1228"), "12/28");
  });

  test("validateCard rejects card with invalid length", () => {
    const res = paymentGateway.validateCard({
      cardNumber: "4242",
      cardholderName: "Alex Morgan",
      expiry: "12/28",
      cvc: "888",
    });
    assert.equal(res.valid, false);
    assert.ok(res.error.includes("15 or 16 digits"));
  });

  test("validateCard rejects empty cardholder name", () => {
    const res = paymentGateway.validateCard({
      cardNumber: "4242 4242 4242 4242",
      cardholderName: "",
      expiry: "12/28",
      cvc: "888",
    });
    assert.equal(res.valid, false);
    assert.ok(res.error.includes("full name"));
  });

  test("validateCard rejects expired card", () => {
    const res = paymentGateway.validateCard({
      cardNumber: "4242 4242 4242 4242",
      cardholderName: "Alex Morgan",
      expiry: "01/20",
      cvc: "888",
    });
    assert.equal(res.valid, false);
    assert.ok(res.error.includes("expired"));
  });

  test("validateCard accepts valid card details", () => {
    const res = paymentGateway.validateCard({
      cardNumber: "4242 4242 4242 4242",
      cardholderName: "Alex Morgan",
      expiry: "12/28",
      cvc: "888",
    });
    assert.equal(res.valid, true);
  });

  console.log("\n2. Payment Processing & Decline Guard Tests:");

  const testUser = {
    id: "usr_test_1",
    name: "Test User",
    email: "test@criation.io",
    role: "customer",
    createdAt: new Date().toISOString(),
  };

  const testItem = {
    product: {
      id: "prod-cloud-pro",
      name: "Criation Cloud Pro",
      tagline: "Infrastructure",
      description: "Test description",
      price: 29,
      category: "saas",
      rating: 4.9,
      reviewsCount: 100,
      features: ["Feature A"],
    },
    quantity: 1,
  };

  try {
    const declineResult = await paymentGateway.processPayment({
      user: testUser,
      items: [testItem],
      total: 31.32,
      paymentMethod: "card",
      cardDetails: {
        cardNumber: "4000 0000 0000 0002",
        cardholderName: "Declined Cardholder",
        expiry: "12/28",
        cvc: "888",
      },
    });
    if (declineResult.success === false) {
      console.log("  ✓ processPayment correctly triggers bank decline for test card ending in 0002");
      passed++;
    } else {
      console.error("  ✗ Expected payment decline for card ending in 0002");
      failed++;
    }
  } catch (err) {
    console.error("  ✗ Decline test error: ", err.message);
    failed++;
  }

  try {
    const successResult = await paymentGateway.processPayment({
      user: testUser,
      items: [testItem],
      total: 31.32,
      paymentMethod: "card",
      cardDetails: {
        cardNumber: "4242 4242 4242 4242",
        cardholderName: "Alex Morgan",
        expiry: "12/28",
        cvc: "888",
      },
    });

    if (successResult.success === true && successResult.order && successResult.transaction) {
      console.log("  ✓ processPayment executes successfully, logs transaction and issues order");
      passed++;
    } else {
      console.error("  ✗ Expected successful payment execution");
      failed++;
    }
  } catch (err) {
    console.error("  ✗ Success payment test error: ", err.message);
    failed++;
  }

  console.log("\n-------------------------------------------------------");
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log("-------------------------------------------------------\n");

  if (failed > 0) {
    process.exit(1);
  }
}

runAsyncTests().catch((e) => {
  console.error("Test runner error:", e);
  process.exit(1);
});
