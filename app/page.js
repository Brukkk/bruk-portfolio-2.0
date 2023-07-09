"use client";
import { useRef, useState } from 'react';
import { useWindowScroll, usePrevious  } from "@uidotdev/usehooks";
import Spline from '@splinetool/react-spline';
import { InViewObserver } from './components/InViewObserver';

export default function Home() {
  const [{ x, y }] = useWindowScroll();
  const previousY = usePrevious(y)
  const objectToAnimate = useRef(null);
  const [animated, setAnimated] = useState(false)
  function onLoad(spline) {
    // find it by mouse click event
    const obj = spline.findObjectById('c116d295-7a76-4302-aadf-df62bb37fdbe')
    objectToAnimate.current = obj;
    console.log(objectToAnimate.current)
  }

  const handleInView = () => {
    console.log("section in view! y:", y)
    // Perform necessary actions when the target element is in view
    if (y <= 700 && y > previousY && !animated) { 
      console.log("Inicio animacion:", y)
      objectToAnimate.current.emitEvent('mouseHover'); 
      setAnimated(true)
    }

    if (y <= 700 && y < previousY && animated) {
      console.log("inicio ANTIanimacion:", y)
      objectToAnimate.current.emitEventReverse('mouseHover');
      setAnimated(false)
    }

    if (y >= 1300 && y < previousY && !animated) { // 
      console.log("final animacion:", y)
      objectToAnimate.current.emitEvent('mouseHover'); 
      setAnimated(true)
    }
    
    if (y >= 1300 && y > previousY && animated){
      console.log("final ANTIanimacion:", y)
      objectToAnimate.current.emitEventReverse('mouseHover');
      setAnimated(false)
    }
  };

  return (
      <main className='relative'>
        <div className='fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen'>
          <Spline 
            onLoad={onLoad}
            scene="https://prod.spline.design/yO0TZ-4g2Eygslwm/scene.splinecode" 
          />
        </div>
        <div className='absolute  w-full'>
          <section className='h-[1000px] bg-slate-900 bg-opacity-50 p-4 '>
            <h1 className='text-center text-6xl'>Transforming ideas 
              <span className='block text-[34px]'>into immersive web experiences</span>
            </h1>
          </section>
          <InViewObserver style={'h-[1000px] bg-pink-500 bg-opacity-20'}  onInView={handleInView}>
            <h2></h2>
          </InViewObserver>
          <section className='h-[1000px] bg-red-500 bg-opacity-20'>3</section>
          <section className='h-[1000px] bg-blue-500 bg-opacity-20'>4</section>
          <section className='h-[1000px] bg-green-500 bg-opacity-20'>5</section>
          <section className='h-[1000px] bg-orange-500 bg-opacity-20'>6</section>
        </div>
        <aside className='fixed bottom-0 left-0 right-0 flex justify-around'>
          Coordinates {" "}
          <span>Y: {y}</span>{" "}
          <span>previousY: {previousY}</span>{" "}
        </aside>
      </main>
  )
}
