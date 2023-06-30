'use client';
import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-0 w-full min-h-screen'>
      <Spline scene="https://prod.spline.design/yO0TZ-4g2Eygslwm/scene.splinecode" />
    </div>
  );
}
