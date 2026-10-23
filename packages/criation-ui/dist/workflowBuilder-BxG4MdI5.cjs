"use client";"use strict";var ue=Object.defineProperty;var ie=(c,t,d)=>t in c?ue(c,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[t]=d;var Q=(c,t,d)=>ie(c,typeof t!="symbol"?t+"":t,d);const e=require("react");function V(c,t=[],d={}){const{enabled:C=!0,initialData:m,onSuccess:a,onError:u,retryCount:s=1}=d,[i,p]=e.useState(m),[O,n]=e.useState(null),[g,y]=e.useState(C),h=e.useRef(!0),w=e.useRef(c);w.current=c,e.useEffect(()=>(h.current=!0,()=>{h.current=!1}),[]);const v=e.useCallback(async()=>{y(!0),n(null);let A=0;for(;A<=s;)try{const k=await w.current();return h.current&&(p(k),y(!1),a==null||a(k)),k}catch(k){if(A++,A>s){if(h.current){const R=k instanceof Error?k:new Error(String(k));n(R),y(!1),u==null||u(R)}return}}},[s,a,u]);return e.useEffect(()=>{C&&v()},[C,...t]),{data:i,error:O,isLoading:g,isError:O!==null,isSuccess:i!==void 0&&O===null,refetch:v}}function le(c){const{fetchList:t,createItem:d,updateItem:C,deleteItem:m,initialItems:a=[]}=c,[u,s]=e.useState(a),[i,p]=e.useState(null),[O,n]=e.useState(!1),[g,y]=e.useState(!1),[h,w]=e.useState(!1),{data:v,isLoading:A,error:k,refetch:R}=V(t,[],{initialData:a,onSuccess:l=>{s(l)}}),P=e.useCallback(()=>{p(null),n(!0)},[]),b=e.useCallback(l=>{p(l),y(!0)},[]),L=e.useCallback(l=>{p(l),w(!0)},[]),f=e.useCallback(()=>{n(!1),y(!1),w(!1),p(null)},[]),M=e.useCallback(async l=>{if(!d)return;const _=await d(l);return s(E=>[_,...E]),f(),_},[d,f]),U=e.useCallback(async(l,_)=>{if(!C)return;const E=await C(l,_);return s(N=>N.map(I=>I.id===l?{...I,...E}:I)),f(),E},[C,f]),D=e.useCallback(async l=>m?(await m(l),s(_=>_.filter(E=>E.id!==l)),f(),!0):!1,[m,f]);return{items:v||u,isLoading:A,error:k,activeItem:i,isCreateOpen:O,isEditOpen:g,isDeleteOpen:h,openCreate:P,openEdit:b,openDelete:L,closeModals:f,handleCreate:M,handleUpdate:U,handleDelete:D,refresh:R}}function de(c={}){const{initialUser:t=null,initialCart:d=[],taxRate:C=.08,autoOpenCartOnAdd:m=!1,loadOrders:a,onLogoutService:u,onNavigate:s,confirmPaymentWithBackend:i}=c,[p,O]=e.useState(d),[n,g]=e.useState(t),[y,h]=e.useState([]),[w,v]=e.useState("store");e.useEffect(()=>{let r=!0;return n!=null&&n.id&&a?Promise.resolve(a(n.id)).then(o=>{r&&Array.isArray(o)&&h(o)}).catch(()=>{}):n||h([]),()=>{r=!1}},[n==null?void 0:n.id,a]);const A=e.useCallback(async()=>{if(a&&(n!=null&&n.id)){const r=await Promise.resolve(a(n.id));Array.isArray(r)&&h(r)}},[a,n==null?void 0:n.id]),[k,R]=e.useState(!1),[P,b]=e.useState(!1),[L,f]=e.useState(!1),[M,U]=e.useState(!1),[D,l]=e.useState(null),[_,E]=e.useState(null),N=e.useMemo(()=>p.reduce((r,o)=>r+o.quantity,0),[p]),I=e.useMemo(()=>p.reduce((r,o)=>r+o.product.price*o.quantity,0),[p]),H=e.useMemo(()=>Math.round(I*C*100)/100,[I,C]),G=e.useMemo(()=>Math.round((I+H)*100)/100,[I,H]),F=e.useCallback(()=>R(!0),[]),K=e.useCallback(()=>R(!1),[]),Y=e.useCallback(()=>b(!0),[]),$=e.useCallback(()=>b(!1),[]),j=e.useCallback(()=>f(!0),[]),z=e.useCallback(()=>f(!1),[]),J=e.useCallback(()=>U(!0),[]),X=e.useCallback(()=>{U(!1),l(null),E(null)},[]),Z=e.useCallback((r,o=null)=>{l(r),E(o),U(!0)},[]),x=e.useCallback(r=>{v(r),s&&s(r)},[s]),ee=e.useCallback((r,o=1)=>{O(T=>T.find(S=>S.product.id===r.id)?T.map(S=>S.product.id===r.id?{...S,quantity:S.quantity+o}:S):[...T,{product:r,quantity:o}]),m&&R(!0)},[m]),te=e.useCallback((r,o)=>{O(T=>T.map(W=>{if(W.product.id===r){const S=W.quantity+o;return S>0?{...W,quantity:S}:null}return W}).filter(Boolean))},[]),se=e.useCallback(r=>{O(o=>o.filter(T=>T.product.id!==r))},[]),re=e.useCallback(()=>{O([])},[]),ne=e.useCallback(()=>{R(!1),n?f(!0):b(!0)},[n]),ae=e.useCallback(async r=>{if(g(r),b(!1),a){const o=await Promise.resolve(a(r.id));h(o)}O(o=>(o.length>0&&f(!0),o))},[a]),oe=e.useCallback(async()=>{u&&await Promise.resolve(u()),g(null),h([]),x("store")},[u,x]),ce=e.useCallback(async r=>{if(i&&!await Promise.resolve(i(r)))throw new Error("Payment validation failed: provider could not confirm settlement.");if(f(!1),O([]),r.order&&(l(r.order),E(r.transaction||null),U(!0),a&&n)){const o=await Promise.resolve(a(n.id));h(o)}},[i,a,n]);return{cartItems:p,currentUser:n,orders:y,currentView:w,cartCount:N,cartSubtotal:I,cartTax:H,cartTotal:G,isCartOpen:k,isAuthOpen:P,isCheckoutOpen:L,isReceiptOpen:M,activeReceiptOrder:D,activeReceiptTxn:_,addToCart:ee,updateQuantity:te,removeFromCart:se,clearCart:re,proceedToCheckout:ne,handleAuthSuccess:ae,handleLogout:oe,handlePaymentSuccess:ce,openCart:F,closeCart:K,openAuth:Y,closeAuth:$,openCheckout:j,closeCheckout:z,openReceipt:J,closeReceipt:X,viewReceipt:Z,navigateTo:x,refreshOrders:A,setOrders:h,setCurrentUser:g}}function q(c){const t=c.trim(),d=[],C=t.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map(m=>m.trim()).filter(Boolean);for(const m of C){const a=m.split(`
`).map(p=>p.trim()).filter(Boolean);if(a.length===0)continue;const u=a[0].replace(/:$/,"").trim(),s=[];let i="CUSTOM";/changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(u)?(i="QUANTITY_CHANGE",s.push({action:"UPDATE_CART_ITEM",target:"cartItem"}),s.push({action:"REMOVE_FROM_CART",target:"cartItem",condition:{field:"quantity",operator:"is_zero"},fallbackAction:"KEEP_CART_ITEM"})):/removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(u)?(i="REMOVE_ITEM",s.push({action:"REMOVE_MATCHING_ITEM",target:"cartItem"})):/proceeds?\s+to\s+checkout/i.test(u)?(i="PROCEED_CHECKOUT",s.push({action:"CLOSE_CART_DRAWER"}),s.push({action:"OPEN_AUTH_WINDOW",condition:{field:"currentUser",operator:"is_null"},fallbackAction:"OPEN_CHECKOUT_WINDOW"})):/authentication\s+succeeds?|login\s+succeeds?/i.test(u)?(i="AUTH_SUCCESS",s.push({action:"SET_CURRENT_USER",target:"user"}),s.push({action:"LOAD_USER_ORDERS"}),s.push({action:"OPEN_CHECKOUT_WINDOW",condition:{field:"cartItems",operator:"has_items"}})):/logs?\s+out/i.test(u)?(i="LOGOUT",s.push({action:"LOGOUT_AUTH_SERVICE"}),s.push({action:"CLEAR_CURRENT_USER"}),s.push({action:"CLEAR_ORDERS"}),s.push({action:"NAVIGATE_TO",params:{route:"store"}})):/payment\s+succeeds?|order\s+is\s+placed/i.test(u)&&(i="PAYMENT_SUCCESS",s.push({action:"CLOSE_CHECKOUT_WINDOW"}),s.push({action:"CLEAR_CART"}),s.push({action:"SHOW_ORDER_RECEIPT",condition:{field:"result.order",operator:"is_not_null"}}),s.push({action:"REFRESH_ORDER_HISTORY"})),d.push({id:`rule-${i.toLowerCase()}`,trigger:i,englishTrigger:u,description:a.slice(1).join(" "),steps:s})}return{name:"CommerceWorkflow",description:"Compiled plain-English reactive state and workflow specification",rules:d,rawEnglish:t}}function pe(c){return`/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${q(c).rules.length} plain-English behavior rules
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
`}class B{constructor(t){Q(this,"_name");Q(this,"_steps",[]);this._name=t}whenQuantityChanges(t="Update matching item, remove if zero"){return this._steps.push({name:"QuantityChangeRule",type:"QUANTITY_CHANGE",handler:()=>t}),this}whenItemRemoved(t="Remove matching product from cart"){return this._steps.push({name:"RemoveItemRule",type:"REMOVE_ITEM",handler:()=>t}),this}whenCheckoutBegins(t="Close cart; prompt login if unauthenticated; else open checkout"){return this._steps.push({name:"CheckoutBeginRule",type:"PROCEED_CHECKOUT",handler:()=>t}),this}whenAuthenticated(t="Store user, load orders, resume checkout if cart not empty"){return this._steps.push({name:"AuthSuccessRule",type:"AUTH_SUCCESS",handler:()=>t}),this}whenLoggedOut(t="Log out from auth service, wipe user state, return to store"){return this._steps.push({name:"LogoutRule",type:"LOGOUT",handler:()=>t}),this}whenPaymentSucceeds(t="Close checkout, empty cart, display receipt, refresh orders"){return this._steps.push({name:"PaymentSuccessRule",type:"PAYMENT_SUCCESS",handler:()=>t}),this}build(){return{name:this._name,stepCount:this._steps.length,steps:[...this._steps]}}}function he(c="ApplicationWorkflow"){return new B(c)}exports.FluentWorkflowBuilder=B;exports.compileEnglishWorkflowToTypeScript=pe;exports.parseEnglishWorkflow=q;exports.useCommerceWorkflow=de;exports.useCrudWorkflow=le;exports.useDataQuery=V;exports.workflow=he;
