'use client';
import React from 'react';

export default function CounterPage() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <span>Productos en el carrito</span>
        <span className=' text-7xl'>{count}</span>

        <div className='flex space-x-2'>

          {count === 0 ?

            <button onClick={() => setCount(count - 1)} disabled className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2  opacity-75' >
              -
            </button>

            : <button onClick={() => setCount(count - 1)} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2'>
              -
            </button>
          }



          <button onClick={() => setCount(count + 1)} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2'>
            +
          </button>
        </div>

      </div>
    </>
  );
}