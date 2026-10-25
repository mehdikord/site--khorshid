'use client';
import {useEffect,useRef} from 'react';

export function BrushCursor(){
 const cursorRef=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
  if(!finePointer.matches)return;
  const cursor=cursorRef.current;if(!cursor)return;
  const body=document.body;body.classList.add('brush-cursor-enabled');
  let x=-100,y=-100,raf=0,visible=false;
  const render=()=>{raf=0;cursor.style.transform=`translate3d(${x-5}px,${y-33}px,0)`};
  const move=(event:PointerEvent)=>{
   if(event.pointerType!=='mouse'&&event.pointerType!=='pen')return;
   x=event.clientX;y=event.clientY;visible=true;cursor.classList.add('is-visible');
   const target=event.target instanceof Element?event.target:null;
   cursor.classList.toggle('is-hovered',!!target?.closest('a,button,[role="button"],label,.clickable'));
   cursor.classList.toggle('is-text',!!target?.closest('input,textarea,[contenteditable="true"]'));
   if(!raf)raf=requestAnimationFrame(render);
  };
  const down=()=>cursor.classList.add('is-pressed');
  const up=()=>cursor.classList.remove('is-pressed');
  const leave=()=>{visible=false;cursor.classList.remove('is-visible','is-hovered','is-pressed','is-text')};
  const enter=()=>{if(visible)cursor.classList.add('is-visible')};
  window.addEventListener('pointermove',move,{passive:true});
  window.addEventListener('pointerdown',down,{passive:true});
  window.addEventListener('pointerup',up,{passive:true});
  document.documentElement.addEventListener('pointerleave',leave);
  document.documentElement.addEventListener('pointerenter',enter);
  return ()=>{body.classList.remove('brush-cursor-enabled');window.removeEventListener('pointermove',move);window.removeEventListener('pointerdown',down);window.removeEventListener('pointerup',up);document.documentElement.removeEventListener('pointerleave',leave);document.documentElement.removeEventListener('pointerenter',enter);if(raf)cancelAnimationFrame(raf)};
 },[]);
 return <div ref={cursorRef} className="brush-cursor" aria-hidden="true"><span className="brush-contact"/><svg viewBox="0 0 48 48" fill="none"><defs><linearGradient id="brushWood" x1="25" y1="25" x2="41" y2="7" gradientUnits="userSpaceOnUse"><stop stopColor="#7b432f"/><stop offset=".48" stopColor="#c28457"/><stop offset="1" stopColor="#e2bb83"/></linearGradient><linearGradient id="brushMetal" x1="14" y1="29" x2="24" y2="25" gradientUnits="userSpaceOnUse"><stop stopColor="#d4ba8d"/><stop offset="1" stopColor="#7e6d55"/></linearGradient></defs><path d="M19.2 25.4 34.7 8.8c1.7-1.8 4.6-2.2 6.3-.5 1.6 1.6 1.3 4.2-.4 6L24.2 31.6l-5-6.2Z" fill="url(#brushWood)" stroke="#573c2d" strokeWidth="1.2"/><path d="m24.3 15.6 4.1 3.5" stroke="#f3d8ad" strokeWidth="1.1" strokeLinecap="round"/><path d="m13.5 30.4 6.1-7.3 6.5 5.7-6.1 7.4-6.5-5.8Z" fill="url(#brushMetal)" stroke="#6f5b46" strokeWidth="1.1"/><path d="M13.5 30.4c-2.6 2.6-6.1 7.2-7.4 12.4 4.9-.8 10.4-3.7 13.9-6.6l-6.5-5.8Z" fill="#302923" stroke="#211b17" strokeWidth="1.1"/><path d="M7.2 41.3c1.3-1.5 2.3-2.3 3.4-2.6" stroke="#c6815d" strokeWidth="1.7" strokeLinecap="round"/><path d="m14.9 30.5 5.1 4.5" stroke="#ead6ae" strokeWidth=".9" strokeLinecap="round"/><circle cx="6.3" cy="43.1" r="1.2" fill="#a85d43"/></svg><span className="brush-glint">✳</span></div>
}
