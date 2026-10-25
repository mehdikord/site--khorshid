'use client';
import Image from 'next/image';
import {useState} from 'react';
import {ArrowLeft,ArrowRight,Quote,MoveUpLeft} from 'lucide-react';
import {testimonials} from '@/data/site';
const moments=[
 {image:'/art/artist-studio.webp',alt:'آرامش یک آتلیه‌ی هنری',label:'A MOMENT TO FIND YOUR WAY'},
 {image:'/art/children-painting.webp',alt:'کودکان در حال تجربه‌ی رنگ در کلاس',label:'A LITTLE ROOM TO GROW'},
 {image:'/art/gallery-interior.webp',alt:'فضای آرام گالری و نمایش آثار',label:'A SPACE TO KEEP MAKING'}
];
export function TestimonialSection(){
 const [index,setIndex]=useState(0);const item=testimonials[index];const moment=moments[index];
 const next=()=>setIndex(i=>(i+1)%testimonials.length);const prev=()=>setIndex(i=>(i-1+testimonials.length)%testimonials.length);
 return <section className="testimonials-showcase"><div className="wrap">
  <div className="testimonials-heading"><div><span className="eyebrow">NOTES FROM THE STUDIO · ۰۳ روایت</span><h2>از زبانِ هنرجویان</h2><p>هر مسیر، تجربه‌ای شخصی‌ست. این‌ها چند یادداشت کوتاه از همراهان خورشید است.</p></div><div className="testimonials-controls"><span className="review-count en">{String(index+1).padStart(2,'0')} <i>/</i> {String(testimonials.length).padStart(2,'0')}</span><button onClick={prev} aria-label="نظر قبلی"><ArrowRight size={17}/></button><button onClick={next} aria-label="نظر بعدی"><ArrowLeft size={17}/></button></div></div>
  <div className="review-stage"><article className="review-card" aria-live="polite" key={index}><div className="review-topline"><span className="review-kicker"><Quote size={15}/> تجربه‌ی کلاس‌های خورشید</span><span className="review-ornament en">A PERSONAL NOTE</span></div><blockquote>{item.quote.replace(/[«»]/g,'')}</blockquote><div className="review-bottom"><div className="review-person"><span className="review-avatar">{item.name.slice(0,1)}</span><div><b>{item.name}</b><small>{item.role}</small></div></div><span className="review-signature en">KHORSHID STUDIO</span></div><div className="review-progress" aria-label="انتخاب دیدگاه">{testimonials.map((t,i)=><button key={t.name} aria-label={`نمایش دیدگاه ${i+1}`} aria-current={index===i} onClick={()=>setIndex(i)}><span style={{transform: i===index?'scaleX(1)':'scaleX(0)'}}/></button>)}</div></article><div className="review-art"><Image key={moment.image} src={moment.image} alt={moment.alt} fill sizes="(max-width: 700px) 90vw, 42vw"/><div className="review-art-overlay"><span className="en">{moment.label}</span><b>هنر، به شیوه‌ی خودت.</b></div><div className="review-art-stamp"><span>یادداشت</span><b>{String(index+1).padStart(2,'۰')}</b></div><span className="review-art-note"><MoveUpLeft size={14}/> لحظه‌هایی از آتلیه</span></div></div>
  <div className="review-footer"><span>دیدگاه‌ها نمونه‌ی نمایشی هستند.</span><div className="review-swipe"><span className="review-swipe-line"/>برای خواندن دیدگاه بعدی، از پیکان‌ها استفاده کنید</div></div>
 </div></section>
}
