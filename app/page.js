"use client";
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const objectToAnimate = useRef(null);
  function onLoad(spline) {
    // find it by mouse click event
    const obj = spline.findObjectById('c116d295-7a76-4302-aadf-df62bb37fdbe')
    objectToAnimate.current = obj;
    console.log(objectToAnimate.current)
  }

  function triggerAnimation() {
    // Animation on mouseHover dispatched to iframe from a click Event in React
    objectToAnimate.current.emitEvent('mouseHover');
    setTimeout(() => {
      objectToAnimate.current.emitEventReverse('mouseHover')  
    }, 1000);
  }
  return (
      <main className='relative h-full '>
        <div className='fixed top-0 left-0 right-0 bottom-0 z-0 w-full min-h-screen'>
          width: {size.width}
          height: {size.height}
          <Spline 
            onLoad={onLoad}
            scene="https://prod.spline.design/yO0TZ-4g2Eygslwm/scene.splinecode" 
          />
        </div>
        <div className='absolute z-10 w-full' onClick={triggerAnimation} >
          <section className='h-screen bg-slate-500 opacity-20'>1</section>
          <section className='h-screen bg-pink-500 opacity-20'>2</section>
          <section className='h-screen bg-red-500 opacity-20'>3</section>
          <section className='h-screen bg-blue-500 opacity-20'>4</section>
          <section className='h-screen bg-green-500 opacity-20'>5</section>
          <section className='h-screen bg-orange-500 opacity-20'>6</section>
        </div>
        
      </main>
  )
}
