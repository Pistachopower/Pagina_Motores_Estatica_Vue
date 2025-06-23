// Importaciones de imágenes
import MotorFiat1 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat1.avif'
import MotorFiat2 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat2.avif'
import MotorFiat3 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat3.avif'

import MotorFord1 from '@/assets/img/Motores/MotorFord2.2/MotorFord2_1.avif'
import MotorFord2 from '@/assets/img/Motores/MotorFord2.2/MotorFord2.avif'

import MotorMiyamoto1 from '@/assets/img/Motores/MotorMiyamoto/MotorMiyamoto.avif'
import MotorMiyamoto2 from '@/assets/img/Motores/MotorMiyamoto/MotorMiyamoto2.avif'

import MotorNissanTerrano1 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano.avif'
import MotorNissanTerrano2 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano2.avif'
import MotorNissanTerrano3 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano3.avif'

import MotorToyota1KR1_1 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_2.avif'
import MotorToyota1KR1_2 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_3.avif'
import MotorToyota1KR1_3 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_4.avif'
import MotorToyota1KR1_4 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0.avif'
import MotorToyota1KR1_5 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.5.avif'
import MotorToyota1KR1_6 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.6.avif'

import RenaultK9KA410_1 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault.avif'
import RenaultK9KA410_2 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault2.avif'
import RenaultK9KA410_3 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault3.avif'


import CajaCambioRenaultJR5 from '@/assets/img/CajasDeCambio/CajaCambioRenaultJR5/CajaCambioRenaultJR5.avif'
import CajaCambioRenaultJR52 from '@/assets/img/CajasDeCambio/CajaCambioRenaultJR5/CajaCambioRenaultJR5_2.avif'


import CajaCambioToyotaCorolla from '@/assets/img/CajasDeCambio/CajaCambioToyotaCorolla/CajaCambioToyotaCorolla1.avif'
import CajaCambioToyotaCorolla2 from '@/assets/img/CajasDeCambio/CajaCambioToyotaCorolla/CajaCambioToyotaCorolla2.avif'


import AudiAirbag from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag.avif'
import AudiAirbag2 from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag2.avif'
import AudiAirbag3 from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag3.avif'
import AudiAirbag4 from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag4.avif'
import AudiAirbag5 from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag5.avif'


import Audi_Q3 from '@/assets/img/KitsAirbag/Audi_Q3/Audi_Q3_1.avif'

import AudiA1_2021 from '@/assets/img/KitsAirbag/AudiA1_2021/AudiA1_2021_1.avif'

import BMW_Airbag from '@/assets/img/KitsAirbag/BMW_Airbag/BMW_Airbag.avif'


// MOTORES
export const Motores = [
  {
    id: 1,
    motor: "Renault K9KA410",
    descripcion: "Revisado, listo para instalar con garantía profesional.",
    cilindrada: "1.5 L",
    tipoCombustible: "Diésel",
    potenciaEstimada: "70-90 CV",
    turboalimentado: true,
    sistemaInyeccion: "Common Rail",
    precio: 1200,
    stock: 3,
    imagenes: [
          RenaultK9KA410_1,
          RenaultK9KA410_2,
          RenaultK9KA410_3
    ]
      
  },
  {
    id: 2,
    motor: "FIAT 199 2000",
    descripcion: "Revisado, con garantía. Motor Multijet.",
    cilindrada: "2.0 L",
    tipoCombustible: "Diésel",
    potenciaEstimada: "165 CV",
    turboalimentado: true,
    sistemaInyeccion: "Common Rail Multijet",
    precio: 1350,
    stock: 2,
    imagenes: [
        MotorFiat1,
        MotorFiat2,
        MotorFiat3
    ]
      
  },
  {
    id: 3,
    motor: "Ford 2.2",
    descripcion: "Motor TDCi, listo para uso profesional.",
    cilindrada: "2.2 L",
    tipoCombustible: "Diésel",
    potenciaEstimada: "100/200 CV",
    turboalimentado: true,
    sistemaInyeccion: "Common Rail",
    precio: 1300,
    stock: 4,
    imagenes: [
      MotorFord1,
      MotorFord2,
    ] 
  },
  {
    id: 4,
    motor: "Miyamoto",
    descripcion: "Motor japonés para uso industrial o agrícola.",
    cilindrada: "Desconocida",
    tipoCombustible: "Desconocido",
    potenciaEstimada: "Alta",
    turboalimentado: false,
    sistemaInyeccion: "Convencional",
    precio: 1500,
    stock: 1,
    imagenes: [
      MotorMiyamoto1,
      MotorMiyamoto2
    ]
      
  },
  {
    id: 5,
    motor: "Toyota 1KR-FE",
    descripcion: "Motor de 78.000 km, distribución por cadena.",
    cilindrada: "1.0 L",
    tipoCombustible: "Gasolina",
    potenciaEstimada: "68-70 CV",
    turboalimentado: false,
    sistemaInyeccion: "Multipunto",
    precio: 1000,
    stock: 2,
    imagenes: [
      MotorToyota1KR1_1,
      MotorToyota1KR1_2,
      MotorToyota1KR1_3,
      MotorToyota1KR1_4,
      MotorToyota1KR1_5,
      MotorToyota1KR1_6
    ]
  },
  {
    id: 6,
    motor: "Nissan Terrano 2.7 TDI",
    descripcion: "Incluye bomba, turbo e inyectores. Garantía.",
    cilindrada: "2.7 L",
    tipoCombustible: "Diésel",
    potenciaEstimada: "125 CV",
    turboalimentado: true,
    sistemaInyeccion: "Inyección directa",
    precio: 1400,
    stock: 2,
    imagenes: [
      MotorNissanTerrano1,
      MotorNissanTerrano2,
      MotorNissanTerrano3
    ]
  }
];


export const CajasCambio = [
  {
    id: 7,
    cajaCambios: "Toyota (6 velocidades)",
    descripcion: "Caja revisada y lista para instalar.",
    referencia: "6MT-TY-01",
    tipoTransmision: "Manual",
    velocidades: 6,
    traccion: "Delantera",
    codigoOEM: "TYC6-1234",
    fabricante: "Toyota",
    material: "Aluminio",
    peso: "45 kg",
    dimensiones: "70x40x35 cm",
    fechaFabricacion: "2019-04-20",
    precio: 850,
    stock: 1,
    imagenes: 
    [
      CajaCambioToyotaCorolla,
      CajaCambioToyotaCorolla2

    ]
    
  },
  {
    id: 8,
    cajaCambios: "JR5 391",
    descripcion: "Caja manual para Renault/Dacia.",
    referencia: "JR5391",
    tipoTransmision: "Manual",
    velocidades: 5,
    traccion: "Delantera",
    codigoOEM: "JR5-391",
    fabricante: "Renault/Nissan",
    material: "Aleación de aluminio",
    peso: "40 kg",
    dimensiones: "65x38x32 cm",
    fechaFabricacion: "2020-08-12",
    precio: 780,
    stock: 2,
    imagenes: [
      CajaCambioRenaultJR5,
      CajaCambioRenaultJR52
    ]
  }
];


export const Airbags = [
  {
    id: 9,
    airbag: "Airbag Audi A1 2021",
    descripcion: "Incluye cinturones pretensados, reacondicionado con garantía.",
    modelo: "Audi A1 (2021)",
    precio: 650,
    imagen: [AudiA1_2021]
  },
  {
    id: 10,
    airbag: "Kit Airbag Genérico Reacondicionado",
    descripcion: "Sistema de seguridad OEM reacondicionado listo para instalar.",
    modelo: "Multimarca",
    precio: 500,
    imagenes: [Audi_Q3]
  },
  {
    id: 11,
    airbag: "Kit Airbag Audi",
    descripcion: "Airbags + cinturones, reacondicionados con garantía.",
    modelo: "Audi A3/A4",
    precio: 700,
    imagenes: [
      AudiAirbag,
      AudiAirbag2,
      AudiAirbag3,
      AudiAirbag4,
      AudiAirbag5
    ]
  },
  {
    id: 12,
    airbag: "Kit Airbag BMW",
    descripcion: "Airbags + cinturones, reacondicionados.",
    modelo: "BMW Serie 1/3",
    precio: 750,
    imagenes: [BMW_Airbag]
  }
];


