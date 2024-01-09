'use client'
import { SimpleWidget } from '@/app/components'
import {  IoCart } from 'react-icons/io5'
import { useAppSelector } from '@/store/store'

const widgetItems = [{
    href: '/dashboard/counter',
    subTitle: 'Added Products',
    label: 'Counter',
    icon: <IoCart size={30} />,
},
]

export const WidgetsGrid = () => {

    const isCart = useAppSelector(state => state.counter.count)   

    return (
        <div className="flex flex-wrap p-4 justify-around my-2">
            {
                widgetItems.map(widget => (
                    <SimpleWidget key={widget.href} title={ `${isCart}`} {...widget} />
                ))}
        </div>
    )
}
