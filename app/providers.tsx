'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
export type CartItem = { slug:string; title:string; artist:string; price:number; image:string; qty:number };
type Store = { cart:CartItem[]; add:(item:Omit<CartItem,'qty'>,qty?:number)=>void; change:(slug:string,qty:number)=>void; remove:(slug:string)=>void; clear:()=>void };
const CartContext=createContext<Store | null>(null);
export function Providers({children}:{children:React.ReactNode}){
 const [cart,setCart]=useState<CartItem[]>([]); const [ready,setReady]=useState(false);
 useEffect(()=>{try{const saved=localStorage.getItem('khorshid-cart');if(saved)setCart(JSON.parse(saved));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem('khorshid-cart',JSON.stringify(cart))},[cart,ready]);
 const value=useMemo<Store>(()=>({cart,add:(item,qty=1)=>setCart(prev=>{const found=prev.find(x=>x.slug===item.slug);return found?prev.map(x=>x.slug===item.slug?{...x,qty:x.qty+qty}:x):[...prev,{...item,qty}]}),change:(slug,qty)=>setCart(prev=>qty<1?prev.filter(x=>x.slug!==slug):prev.map(x=>x.slug===slug?{...x,qty}:x)),remove:(slug)=>setCart(prev=>prev.filter(x=>x.slug!==slug)),clear:()=>setCart([])}),[cart]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart(){const ctx=useContext(CartContext);if(!ctx)throw new Error('useCart must be inside Providers');return ctx}
