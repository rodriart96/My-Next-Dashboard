import { CartCounter } from '@/app/components/shopping-cart';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Un contador simple',
}

export default function CounterPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <span>Productos en el carrito</span>
       <CartCounter value={1} />
      </div>
    </>
  );
}