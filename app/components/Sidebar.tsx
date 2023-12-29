import React from 'react'
import Image from 'next/image'
import { IoBrowsersOutline, IoFootball, IoLogoReact } from 'react-icons/io5'
import SidebarMenuItem from './SidebarMenuItem'

const menuItems = [{
    icon: <IoBrowsersOutline size={30} />,
    path: '/dashboard/main',
    title: 'Dashboard',
    subtitle: 'Data Overview'
},
{
    icon: <IoBrowsersOutline size={30} />,
    path: '/dashboard/counter',
    title: 'Counter',
    subtitle: 'Counter Overview'
},

{
    icon: <IoFootball size={30} />,
    path: '/dashboard/pokemon',
    title: 'Pokemon Dex',
    subtitle: 'Generacion 1 estatitica'
},
]

export const Sidebar = () => {
    return (
        <div id="menu" style={{ width: '400px' }} className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex text-lg md:text-2xl font-bold text-white items-center">
                    <IoLogoReact className='mr-2' />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500 mb-1">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>

                        <Image width={50} height={50} className="rounded-full w-8 h-8" src="https://pbs.twimg.com/profile_images/1736404145765076992/qjPrOpPK_400x400.jpg" alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Arturo Rodriguez
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">

                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.path}
                            {...item}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Sidebar
