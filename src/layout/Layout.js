import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Slider from '../slider/Slider'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <>
    <main className='layout'>
       <section className='left'>
        <Sidebar/>
       </section>
       <section className='right'>
        <section className='right-top'>
          <Slider/>
        </section>
        <section className='right-bottom'>
        <Outlet/>
        </section>
       </section>
    </main>
    </>
  )
}

export default Layout