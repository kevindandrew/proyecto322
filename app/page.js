
import React from 'react'
import SideBar from './sideBar/SideBar'

export default function page() {
  return (
    <div>page
      <SideBar/>

import Table from '../components/Table';

export default function Home() {
  const usuarios = [
    { nombreCompleto: 'Juan Pérez', correo: 'juan@example.com', telefono: '123-456-7890', rol: 'Admin' },
    { nombreCompleto: 'Ana García', correo: 'ana@example.com', telefono: '234-567-8901', rol: 'Usuario' },
    { nombreCompleto: 'Carlos Ruiz', correo: 'carlos@example.com', telefono: '345-678-9012', rol: 'Editor' }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Table usuarios={usuarios} />

    </div>
  )
}
