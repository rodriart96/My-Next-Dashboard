'use client';
import { addOne, initCounterState, restOne } from '@/store/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React, { useEffect } from 'react'

interface CartCounterProps {
    value: number
}

const getApiCounter = async () => {
    const data = await fetch('/api/counter').then(res => res.json());
    return data;
}

export const CartCounter = ({ value }: CartCounterProps) => {

    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch();
    useEffect(() => {
      getApiCounter()
      .then(({count}) => {
        dispatch(initCounterState(count))
      }) 
    }, [dispatch])
    

    return (
        <>
            <span className=' text-7xl'>{count}</span>
            <div className='flex space-x-2'>
                {count === 0 ?

                    <button 
                    onClick={() => dispatch(restOne())} disabled className='flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-700 transition-all w-[100px] mr-2  opacity-75' >
                        -
                    </button>

                    : <button onClick={() => dispatch(restOne())} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2'>
                        -
                    </button>
                }

                <button onClick={() => dispatch(addOne())} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px] mr-2'>
                    +
                </button>
            </div>
        </>
    )
}