import { WidgetsGrid } from '@/app/components'
import React from 'react'

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <span className="text-gray-500">Data Overview</span>

      <WidgetsGrid />
    </div>
  )
}


