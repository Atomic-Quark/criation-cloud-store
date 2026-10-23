export interface WorkflowProduct {
    id: string;
    name: string;
    price: number;
    [key: string]: any;
}
export interface WorkflowCartItem<T extends WorkflowProduct = WorkflowProduct> {
    product: T;
    quantity: number;
}
export interface WorkflowUser {
    id: string;
    name: string;
    email: string;
    [key: string]: any;
}
export interface WorkflowOrder {
    id: string;
    userId?: string;
    items: WorkflowCartItem[];
    total: number;
    createdAt: string;
    [key: string]: any;
}
export interface CommerceWorkflowConfig<P extends WorkflowProduct = WorkflowProduct, U extends WorkflowUser = WorkflowUser, O extends WorkflowOrder = WorkflowOrder> {
    initialProducts?: P[];
    initialUser?: U | null;
    initialCart?: WorkflowCartItem<P>[];
    taxRate?: number;
    loadOrders?: (userId: string) => O[] | Promise<O[]>;
    onLogoutService?: () => void | Promise<void>;
    onNavigate?: (view: "store" | "orders") => void;
    confirmPaymentWithBackend?: (paymentResult: any) => Promise<boolean> | boolean;
}
export interface CommerceWorkflowResult<P extends WorkflowProduct = WorkflowProduct, U extends WorkflowUser = WorkflowUser, O extends WorkflowOrder = WorkflowOrder> {
    cartItems: WorkflowCartItem<P>[];
    currentUser: U | null;
    orders: O[];
    currentView: "store" | "orders";
    cartCount: number;
    cartSubtotal: number;
    cartTax: number;
    cartTotal: number;
    isCartOpen: boolean;
    isAuthOpen: boolean;
    isCheckoutOpen: boolean;
    isReceiptOpen: boolean;
    activeReceiptOrder: O | null;
    activeReceiptTxn: any | null;
    /**
     * Plain-English Rule:
     * "When the user adds a product to the cart:
     *  If it already exists in the cart, increase its quantity.
     *  Otherwise, add it as a new cart item."
     */
    addToCart: (product: P, quantity?: number) => void;
    /**
     * Plain-English Rule:
     * "When the user changes a product's quantity:
     *  Find the product in the cart.
     *  Add the requested quantity change.
     *  If the new quantity is greater than zero, update the cart item.
     *  Otherwise, remove the item from the cart."
     */
    updateQuantity: (productId: string, delta: number) => void;
    /**
     * Plain-English Rule:
     * "When the user removes a product from the cart:
     *  Remove the matching product from the cart."
     */
    removeFromCart: (productId: string) => void;
    /**
     * Plain-English Rule:
     * "Clear all items from the shopping cart."
     */
    clearCart: () => void;
    /**
     * Plain-English Rule:
     * "When the user proceeds to checkout:
     *  Close the shopping cart.
     *  If the user is not logged in:
     *    Open the authentication window.
     *  Otherwise:
     *    Open the checkout window."
     */
    proceedToCheckout: () => void;
    /**
     * Plain-English Rule:
     * "When authentication succeeds:
     *  Set the current user to the authenticated user.
     *  Load that user's orders.
     *  If the cart contains products:
     *    Open the checkout window."
     */
    handleAuthSuccess: (user: U) => Promise<void>;
    /**
     * Plain-English Rule:
     * "When the user logs out:
     *  Log the user out through the authentication service.
     *  Clear the current user.
     *  Clear the user's orders from the current application state.
     *  Navigate to the store page."
     */
    handleLogout: () => Promise<void>;
    /**
     * Plain-English Rule:
     * "When payment succeeds:
     *  Close the checkout window.
     *  Clear the cart.
     *  If the result contains an order:
     *    Show the order receipt.
     *    Include the order and transaction details.
     *    Refresh the current user's order history."
     */
    handlePaymentSuccess: (result: {
        order?: O;
        transaction?: any;
        [key: string]: any;
    }) => Promise<void>;
    openCart: () => void;
    closeCart: () => void;
    openAuth: () => void;
    closeAuth: () => void;
    openCheckout: () => void;
    closeCheckout: () => void;
    openReceipt: () => void;
    closeReceipt: () => void;
    viewReceipt: (order: O, txn?: any) => void;
    navigateTo: (view: "store" | "orders") => void;
}
/**
 * useCommerceWorkflow:
 * High-level, English-sentence-driven state and workflow engine for Criation UI.
 * Eliminates all manual React event handling for carts, checkout, auth, and payments.
 */
export declare function useCommerceWorkflow<P extends WorkflowProduct = WorkflowProduct, U extends WorkflowUser = WorkflowUser, O extends WorkflowOrder = WorkflowOrder>(config?: CommerceWorkflowConfig<P, U, O>): CommerceWorkflowResult<P, U, O>;
