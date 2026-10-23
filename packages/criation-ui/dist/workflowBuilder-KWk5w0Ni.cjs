"use client";"use strict";var oe=Object.defineProperty;var ce=(a,t,l)=>t in a?oe(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l;var x=(a,t,l)=>ce(a,typeof t!="symbol"?t+"":t,l);const e=require("react");function Q(a,t=[],l={}){const{enabled:h=!0,initialData:i,onSuccess:p,onError:c,retryCount:s=1}=l,[o,d]=e.useState(i),[C,S]=e.useState(null),[A,k]=e.useState(h),_=e.useRef(!0),y=e.useRef(a);y.current=a,e.useEffect(()=>(_.current=!0,()=>{_.current=!1}),[]);const v=e.useCallback(async()=>{k(!0),S(null);let E=0;for(;E<=s;)try{const O=await y.current();return _.current&&(d(O),k(!1),p==null||p(O)),O}catch(O){if(E++,E>s){if(_.current){const R=O instanceof Error?O:new Error(String(O));S(R),k(!1),c==null||c(R)}return}}},[s,p,c]);return e.useEffect(()=>{h&&v()},[h,...t]),{data:o,error:C,isLoading:A,isError:C!==null,isSuccess:o!==void 0&&C===null,refetch:v}}function ue(a){const{fetchList:t,createItem:l,updateItem:h,deleteItem:i,initialItems:p=[]}=a,[c,s]=e.useState(p),[o,d]=e.useState(null),[C,S]=e.useState(!1),[A,k]=e.useState(!1),[_,y]=e.useState(!1),{data:v,isLoading:E,error:O,refetch:R}=Q(t,[],{initialData:p,onSuccess:u=>{s(u)}}),L=e.useCallback(()=>{d(null),S(!0)},[]),w=e.useCallback(u=>{d(u),k(!0)},[]),M=e.useCallback(u=>{d(u),y(!0)},[]),f=e.useCallback(()=>{S(!1),k(!1),y(!1),d(null)},[]),D=e.useCallback(async u=>{if(!l)return;const g=await l(u);return s(m=>[g,...m]),f(),g},[l,f]),U=e.useCallback(async(u,g)=>{if(!h)return;const m=await h(u,g);return s(b=>b.map(W=>W.id===u?{...W,...m}:W)),f(),m},[h,f]),N=e.useCallback(async u=>i?(await i(u),s(g=>g.filter(m=>m.id!==u)),f(),!0):!1,[i,f]);return{items:v||c,isLoading:E,error:O,activeItem:o,isCreateOpen:C,isEditOpen:A,isDeleteOpen:_,openCreate:L,openEdit:w,openDelete:M,closeModals:f,handleCreate:D,handleUpdate:U,handleDelete:N,refresh:R}}function ie(a={}){const{initialUser:t=null,initialCart:l=[],taxRate:h=.08,loadOrders:i,onLogoutService:p,onNavigate:c,confirmPaymentWithBackend:s}=a,[o,d]=e.useState(l),[C,S]=e.useState(t),[A,k]=e.useState([]),[_,y]=e.useState("store"),[v,E]=e.useState(!1),[O,R]=e.useState(!1),[L,w]=e.useState(!1),[M,f]=e.useState(!1),[D,U]=e.useState(null),[N,u]=e.useState(null),g=e.useMemo(()=>o.reduce((r,n)=>r+n.quantity,0),[o]),m=e.useMemo(()=>o.reduce((r,n)=>r+n.product.price*n.quantity,0),[o]),b=e.useMemo(()=>Math.round(m*h*100)/100,[m,h]),W=e.useMemo(()=>Math.round((m+b)*100)/100,[m,b]),B=e.useCallback(()=>E(!0),[]),G=e.useCallback(()=>E(!1),[]),F=e.useCallback(()=>R(!0),[]),K=e.useCallback(()=>R(!1),[]),Y=e.useCallback(()=>w(!0),[]),$=e.useCallback(()=>w(!1),[]),j=e.useCallback(()=>f(!0),[]),z=e.useCallback(()=>{f(!1),U(null),u(null)},[]),J=e.useCallback((r,n=null)=>{U(r),u(n),f(!0)},[]),H=e.useCallback(r=>{y(r),c&&c(r)},[c]),X=e.useCallback((r,n=1)=>{d(T=>T.find(I=>I.product.id===r.id)?T.map(I=>I.product.id===r.id?{...I,quantity:I.quantity+n}:I):[...T,{product:r,quantity:n}])},[]),Z=e.useCallback((r,n)=>{d(T=>T.map(P=>{if(P.product.id===r){const I=P.quantity+n;return I>0?{...P,quantity:I}:null}return P}).filter(Boolean))},[]),ee=e.useCallback(r=>{d(n=>n.filter(T=>T.product.id!==r))},[]),te=e.useCallback(()=>{d([])},[]),se=e.useCallback(()=>{E(!1),C?w(!0):R(!0)},[C]),re=e.useCallback(async r=>{if(S(r),R(!1),i){const n=await Promise.resolve(i(r.id));k(n)}d(n=>(n.length>0&&w(!0),n))},[i]),ne=e.useCallback(async()=>{p&&await Promise.resolve(p()),S(null),k([]),H("store")},[p,H]),ae=e.useCallback(async r=>{if(s&&!await Promise.resolve(s(r)))throw new Error("Payment validation failed: provider could not confirm settlement.");if(w(!1),d([]),r.order&&(U(r.order),u(r.transaction||null),f(!0),i&&C)){const n=await Promise.resolve(i(C.id));k(n)}},[s,i,C]);return{cartItems:o,currentUser:C,orders:A,currentView:_,cartCount:g,cartSubtotal:m,cartTax:b,cartTotal:W,isCartOpen:v,isAuthOpen:O,isCheckoutOpen:L,isReceiptOpen:M,activeReceiptOrder:D,activeReceiptTxn:N,addToCart:X,updateQuantity:Z,removeFromCart:ee,clearCart:te,proceedToCheckout:se,handleAuthSuccess:re,handleLogout:ne,handlePaymentSuccess:ae,openCart:B,closeCart:G,openAuth:F,closeAuth:K,openCheckout:Y,closeCheckout:$,openReceipt:j,closeReceipt:z,viewReceipt:J,navigateTo:H}}function V(a){const t=a.trim(),l=[],h=t.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map(i=>i.trim()).filter(Boolean);for(const i of h){const p=i.split(`
`).map(d=>d.trim()).filter(Boolean);if(p.length===0)continue;const c=p[0].replace(/:$/,"").trim(),s=[];let o="CUSTOM";/changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(c)?(o="QUANTITY_CHANGE",s.push({action:"UPDATE_CART_ITEM",target:"cartItem"}),s.push({action:"REMOVE_FROM_CART",target:"cartItem",condition:{field:"quantity",operator:"is_zero"},fallbackAction:"KEEP_CART_ITEM"})):/removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(c)?(o="REMOVE_ITEM",s.push({action:"REMOVE_MATCHING_ITEM",target:"cartItem"})):/proceeds?\s+to\s+checkout/i.test(c)?(o="PROCEED_CHECKOUT",s.push({action:"CLOSE_CART_DRAWER"}),s.push({action:"OPEN_AUTH_WINDOW",condition:{field:"currentUser",operator:"is_null"},fallbackAction:"OPEN_CHECKOUT_WINDOW"})):/authentication\s+succeeds?|login\s+succeeds?/i.test(c)?(o="AUTH_SUCCESS",s.push({action:"SET_CURRENT_USER",target:"user"}),s.push({action:"LOAD_USER_ORDERS"}),s.push({action:"OPEN_CHECKOUT_WINDOW",condition:{field:"cartItems",operator:"has_items"}})):/logs?\s+out/i.test(c)?(o="LOGOUT",s.push({action:"LOGOUT_AUTH_SERVICE"}),s.push({action:"CLEAR_CURRENT_USER"}),s.push({action:"CLEAR_ORDERS"}),s.push({action:"NAVIGATE_TO",params:{route:"store"}})):/payment\s+succeeds?|order\s+is\s+placed/i.test(c)&&(o="PAYMENT_SUCCESS",s.push({action:"CLOSE_CHECKOUT_WINDOW"}),s.push({action:"CLEAR_CART"}),s.push({action:"SHOW_ORDER_RECEIPT",condition:{field:"result.order",operator:"is_not_null"}}),s.push({action:"REFRESH_ORDER_HISTORY"})),l.push({id:`rule-${o.toLowerCase()}`,trigger:o,englishTrigger:c,description:p.slice(1).join(" "),steps:s})}return{name:"CommerceWorkflow",description:"Compiled plain-English reactive state and workflow specification",rules:l,rawEnglish:t}}function le(a){return`/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${V(a).rules.length} plain-English behavior rules
 */

import { useState, useCallback, useMemo } from "react";
import type { CartItem, Product, User, Order } from "./types";

export function useStoreWorkflow(services: {
  loadOrders: (userId: string) => Promise<Order[]>;
  logout: () => void;
  confirmPayment?: (result: any) => Promise<boolean>;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentView, setCurrentView] = useState<"store" | "orders">("store");

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [activeReceiptOrder, setActiveReceiptOrder] = useState<Order | null>(null);

  // 1. "When the user changes a product's quantity"
  const handleUpdateQuantity = useCallback((productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const nextQ = item.quantity + delta;
            return nextQ > 0 ? { ...item, quantity: nextQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  }, []);

  // 2. "When the user removes a product from the cart"
  const handleRemoveFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  // 3. "When the user proceeds to checkout"
  const handleProceedToCheckout = useCallback(() => {
    setIsCartOpen(false);
    if (!currentUser) {
      setIsAuthOpen(true);
    } else {
      setIsCheckoutOpen(true);
    }
  }, [currentUser]);

  // 4. "When authentication succeeds"
  const handleAuthSuccess = useCallback(async (user: User) => {
    setCurrentUser(user);
    setIsAuthOpen(false);
    const userOrders = await services.loadOrders(user.id);
    setOrders(userOrders);
    setCartItems((currentCart) => {
      if (currentCart.length > 0) {
        setIsCheckoutOpen(true);
      }
      return currentCart;
    });
  }, [services]);

  // 5. "When the user logs out"
  const handleLogout = useCallback(() => {
    services.logout();
    setCurrentUser(null);
    setOrders([]);
    setCurrentView("store");
  }, [services]);

  // 6. "When payment succeeds"
  const handlePaymentSuccess = useCallback(async (result: any) => {
    if (services.confirmPayment) {
      await services.confirmPayment(result);
    }
    setIsCheckoutOpen(false);
    setCartItems([]);
    if (result.order) {
      setActiveReceiptOrder(result.order);
      setIsReceiptOpen(true);
      if (currentUser) {
        const refreshed = await services.loadOrders(currentUser.id);
        setOrders(refreshed);
      }
    }
  }, [services, currentUser]);

  return {
    cartItems,
    currentUser,
    orders,
    currentView,
    isCartOpen,
    setIsCartOpen,
    isAuthOpen,
    setIsAuthOpen,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isReceiptOpen,
    setIsReceiptOpen,
    activeReceiptOrder,
    handleUpdateQuantity,
    handleRemoveFromCart,
    handleProceedToCheckout,
    handleAuthSuccess,
    handleLogout,
    handlePaymentSuccess,
    setCurrentView,
  };
}
`}class q{constructor(t){x(this,"_name");x(this,"_steps",[]);this._name=t}whenQuantityChanges(t="Update matching item, remove if zero"){return this._steps.push({name:"QuantityChangeRule",type:"QUANTITY_CHANGE",handler:()=>t}),this}whenItemRemoved(t="Remove matching product from cart"){return this._steps.push({name:"RemoveItemRule",type:"REMOVE_ITEM",handler:()=>t}),this}whenCheckoutBegins(t="Close cart; prompt login if unauthenticated; else open checkout"){return this._steps.push({name:"CheckoutBeginRule",type:"PROCEED_CHECKOUT",handler:()=>t}),this}whenAuthenticated(t="Store user, load orders, resume checkout if cart not empty"){return this._steps.push({name:"AuthSuccessRule",type:"AUTH_SUCCESS",handler:()=>t}),this}whenLoggedOut(t="Log out from auth service, wipe user state, return to store"){return this._steps.push({name:"LogoutRule",type:"LOGOUT",handler:()=>t}),this}whenPaymentSucceeds(t="Close checkout, empty cart, display receipt, refresh orders"){return this._steps.push({name:"PaymentSuccessRule",type:"PAYMENT_SUCCESS",handler:()=>t}),this}build(){return{name:this._name,stepCount:this._steps.length,steps:[...this._steps]}}}function pe(a="ApplicationWorkflow"){return new q(a)}exports.FluentWorkflowBuilder=q;exports.compileEnglishWorkflowToTypeScript=le;exports.parseEnglishWorkflow=V;exports.useCommerceWorkflow=ie;exports.useCrudWorkflow=ue;exports.useDataQuery=Q;exports.workflow=pe;
