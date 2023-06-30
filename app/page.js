import SplineBackground from './components/SplineBG';

export default function Home() {
  return (
    <main className='relative h-full'>
      <SplineBackground />
      <div className='absolute z-20 w-full'>
        <h1 className='underline text-4xl'>Hello world</h1>
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
