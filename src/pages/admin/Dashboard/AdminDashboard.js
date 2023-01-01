import React from 'react'
import AdminMenu from '../AdminMenu/AdminMenu'
import AdminProducts from './AdminProducts'
import Footer from '../../../footer/Footer'

function AdminDashboard() {

  return (
    <div>
        <AdminMenu/>
        <AdminProducts/>
        <Footer/>
    </div>
  )
}

export default AdminDashboard