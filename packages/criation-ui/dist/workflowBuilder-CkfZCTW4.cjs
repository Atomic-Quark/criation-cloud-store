"use client";"use strict";var ne=Object.defineProperty;var ae=(n,t,l)=>t in n?ne(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l;var x=(n,t,l)=>ae(n,typeof t!="symbol"?t+"":t,l);const e=require("react");function Q(n,t=[],l={}){const{enabled:h=!0,initialData:u,onSuccess:p,onError:c,retryCount:s=1}=l,[a,d]=e.useState(u),[C,R]=e.useState(null),[U,O]=e.useState(h),_=e.useRef(!0),y=e.useRef(n);y.current=n,e.useEffect(()=>(_.current=!0,()=>{_.current=!1}),[]);const A=e.useCallback(async()=>{O(!0),R(null);let k=0;for(;k<=s;)try{const m=await y.current();return _.current&&(d(m),O(!1),p==null||p(m)),m}catch(m){if(k++,k>s){if(_.current){const I=m instanceof Error?m:new Error(String(m));R(I),O(!1),c==null||c(I)}return}}},[s,p,c]);return e.useEffect(()=>{h&&A()},[h,...t]),{data:a,error:C,isLoading:U,isError:C!==null,isSuccess:a!==void 0&&C===null,refetch:A}}function oe(n){const{fetchList:t,createItem:l,updateItem:h,deleteItem:u,initialItems:p=[]}=n,[c,s]=e.useState(p),[a,d]=e.useState(null),[C,R]=e.useState(!1),[U,O]=e.useState(!1),[_,y]=e.useState(!1),{data:A,isLoading:k,error:m,refetch:I}=Q(t,[],{initialData:p,onSuccess:i=>{s(i)}}),L=e.useCallback(()=>{d(null),R(!0)},[]),T=e.useCallback(i=>{d(i),O(!0)},[]),M=e.useCallback(i=>{d(i),y(!0)},[]),E=e.useCallback(()=>{R(!1),O(!1),y(!1),d(null)},[]),D=e.useCallback(async i=>{if(!l)return;const g=await l(i);return s(f=>[g,...f]),E(),g},[l,E]),P=e.useCallback(async(i,g)=>{if(!h)return;const f=await h(i,g);return s(v=>v.map(b=>b.id===i?{...b,...f}:b)),E(),f},[h,E]),N=e.useCallback(async i=>u?(await u(i),s(g=>g.filter(f=>f.id!==i)),E(),!0):!1,[u,E]);return{items:A||c,isLoading:k,error:m,activeItem:a,isCreateOpen:C,isEditOpen:U,isDeleteOpen:_,openCreate:L,openEdit:T,openDelete:M,closeModals:E,handleCreate:D,handleUpdate:P,handleDelete:N,refresh:I}}function ce(n={}){const{initialUser:t=null,initialCart:l=[],taxRate:h=.08,loadOrders:u,onLogoutService:p,onNavigate:c,confirmPaymentWithBackend:s}=n,[a,d]=e.useState(l),[C,R]=e.useState(t),[U,O]=e.useState([]),[_,y]=e.useState("store"),[A,k]=e.useState(!1),[m,I]=e.useState(!1),[L,T]=e.useState(!1),[M,E]=e.useState(!1),[D,P]=e.useState(null),[N,i]=e.useState(null),g=e.useMemo(()=>a.reduce((r,o)=>r+o.quantity,0),[a]),f=e.useMemo(()=>a.reduce((r,o)=>r+o.product.price*o.quantity,0),[a]),v=e.useMemo(()=>Math.round(f*h*100)/100,[f,h]),b=e.useMemo(()=>Math.round((f+v)*100)/100,[f,v]),B=e.useCallback(()=>k(!0),[]),G=e.useCallback(()=>k(!1),[]),F=e.useCallback(()=>I(!0),[]),K=e.useCallback(()=>I(!1),[]),Y=e.useCallback(()=>T(!0),[]),$=e.useCallback(()=>T(!1),[]),j=e.useCallback(()=>{E(!1),P(null),i(null)},[]),H=e.useCallback(r=>{y(r),c&&c(r)},[c]),z=e.useCallback((r,o=1)=>{d(w=>w.find(S=>S.product.id===r.id)?w.map(S=>S.product.id===r.id?{...S,quantity:S.quantity+o}:S):[...w,{product:r,quantity:o}])},[]),J=e.useCallback((r,o)=>{d(w=>w.map(W=>{if(W.product.id===r){const S=W.quantity+o;return S>0?{...W,quantity:S}:null}return W}).filter(Boolean))},[]),X=e.useCallback(r=>{d(o=>o.filter(w=>w.product.id!==r))},[]),Z=e.useCallback(()=>{d([])},[]),ee=e.useCallback(()=>{k(!1),C?T(!0):I(!0)},[C]),te=e.useCallback(async r=>{if(R(r),I(!1),u){const o=await Promise.resolve(u(r.id));O(o)}d(o=>(o.length>0&&T(!0),o))},[u]),se=e.useCallback(async()=>{p&&await Promise.resolve(p()),R(null),O([]),H("store")},[p,H]),re=e.useCallback(async r=>{if(s&&!await Promise.resolve(s(r)))throw new Error("Payment validation failed: provider could not confirm settlement.");if(T(!1),d([]),r.order&&(P(r.order),i(r.transaction||null),E(!0),u&&C)){const o=await Promise.resolve(u(C.id));O(o)}},[s,u,C]);return{cartItems:a,currentUser:C,orders:U,currentView:_,cartCount:g,cartSubtotal:f,cartTax:v,cartTotal:b,isCartOpen:A,isAuthOpen:m,isCheckoutOpen:L,isReceiptOpen:M,activeReceiptOrder:D,activeReceiptTxn:N,addToCart:z,updateQuantity:J,removeFromCart:X,clearCart:Z,proceedToCheckout:ee,handleAuthSuccess:te,handleLogout:se,handlePaymentSuccess:re,openCart:B,closeCart:G,openAuth:F,closeAuth:K,openCheckout:Y,closeCheckout:$,closeReceipt:j,navigateTo:H}}function V(n){const t=n.trim(),l=[],h=t.split(/(?=When\s+(?:the\s+user|authentication|payment|an?\s+order))/i).map(u=>u.trim()).filter(Boolean);for(const u of h){const p=u.split(`
`).map(d=>d.trim()).filter(Boolean);if(p.length===0)continue;const c=p[0].replace(/:$/,"").trim(),s=[];let a="CUSTOM";/changes?\s+(?:a\s+)?product'?s?\s+quantity/i.test(c)?(a="QUANTITY_CHANGE",s.push({action:"UPDATE_CART_ITEM",target:"cartItem"}),s.push({action:"REMOVE_FROM_CART",target:"cartItem",condition:{field:"quantity",operator:"is_zero"},fallbackAction:"KEEP_CART_ITEM"})):/removes?\s+(?:a\s+)?product\s+(?:from\s+(?:the\s+)?cart)?/i.test(c)?(a="REMOVE_ITEM",s.push({action:"REMOVE_MATCHING_ITEM",target:"cartItem"})):/proceeds?\s+to\s+checkout/i.test(c)?(a="PROCEED_CHECKOUT",s.push({action:"CLOSE_CART_DRAWER"}),s.push({action:"OPEN_AUTH_WINDOW",condition:{field:"currentUser",operator:"is_null"},fallbackAction:"OPEN_CHECKOUT_WINDOW"})):/authentication\s+succeeds?|login\s+succeeds?/i.test(c)?(a="AUTH_SUCCESS",s.push({action:"SET_CURRENT_USER",target:"user"}),s.push({action:"LOAD_USER_ORDERS"}),s.push({action:"OPEN_CHECKOUT_WINDOW",condition:{field:"cartItems",operator:"has_items"}})):/logs?\s+out/i.test(c)?(a="LOGOUT",s.push({action:"LOGOUT_AUTH_SERVICE"}),s.push({action:"CLEAR_CURRENT_USER"}),s.push({action:"CLEAR_ORDERS"}),s.push({action:"NAVIGATE_TO",params:{route:"store"}})):/payment\s+succeeds?|order\s+is\s+placed/i.test(c)&&(a="PAYMENT_SUCCESS",s.push({action:"CLOSE_CHECKOUT_WINDOW"}),s.push({action:"CLEAR_CART"}),s.push({action:"SHOW_ORDER_RECEIPT",condition:{field:"result.order",operator:"is_not_null"}}),s.push({action:"REFRESH_ORDER_HISTORY"})),l.push({id:`rule-${a.toLowerCase()}`,trigger:a,englishTrigger:c,description:p.slice(1).join(" "),steps:s})}return{name:"CommerceWorkflow",description:"Compiled plain-English reactive state and workflow specification",rules:l,rawEnglish:t}}function ue(n){return`/**
 * Generated by Criation UI — Natural Language Workflow Compiler
 * Source: ${V(n).rules.length} plain-English behavior rules
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
`}class q{constructor(t){x(this,"_name");x(this,"_steps",[]);this._name=t}whenQuantityChanges(t="Update matching item, remove if zero"){return this._steps.push({name:"QuantityChangeRule",type:"QUANTITY_CHANGE",handler:()=>t}),this}whenItemRemoved(t="Remove matching product from cart"){return this._steps.push({name:"RemoveItemRule",type:"REMOVE_ITEM",handler:()=>t}),this}whenCheckoutBegins(t="Close cart; prompt login if unauthenticated; else open checkout"){return this._steps.push({name:"CheckoutBeginRule",type:"PROCEED_CHECKOUT",handler:()=>t}),this}whenAuthenticated(t="Store user, load orders, resume checkout if cart not empty"){return this._steps.push({name:"AuthSuccessRule",type:"AUTH_SUCCESS",handler:()=>t}),this}whenLoggedOut(t="Log out from auth service, wipe user state, return to store"){return this._steps.push({name:"LogoutRule",type:"LOGOUT",handler:()=>t}),this}whenPaymentSucceeds(t="Close checkout, empty cart, display receipt, refresh orders"){return this._steps.push({name:"PaymentSuccessRule",type:"PAYMENT_SUCCESS",handler:()=>t}),this}build(){return{name:this._name,stepCount:this._steps.length,steps:[...this._steps]}}}function ie(n="ApplicationWorkflow"){return new q(n)}exports.FluentWorkflowBuilder=q;exports.compileEnglishWorkflowToTypeScript=ue;exports.parseEnglishWorkflow=V;exports.useCommerceWorkflow=ce;exports.useCrudWorkflow=oe;exports.useDataQuery=Q;exports.workflow=ie;
