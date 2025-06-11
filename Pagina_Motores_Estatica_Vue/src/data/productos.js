// src/data/productos.js
import CajaCambioRenaultJR5 from '@/assets/img/CajasDeCambio/CajaCambioRenaultJR5/CajaCambioRenaultJR5.avif'
import MotorFiat1 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat1.avif'
import AudiAirbag from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag.avif'

export const productos = [
  {
    id: 1,
    nombre: 'Caja de cambio Renault JR5',
    descripcion: 'Caja de cambio para Renault modelo JR5',
    imagen: CajaCambioRenaultJR5,
  },
  {
    id: 2,
    nombre: 'Motor Fiat 1.9',
    descripcion: 'Motor para Fiat 1.9 2000',
    imagen: MotorFiat1,
  },
  {
    id: 3,
    nombre: 'Kit Airbag Audi',
    descripcion: 'Kit de airbag completo para Audi',
    imagen: AudiAirbag,
  },
]
