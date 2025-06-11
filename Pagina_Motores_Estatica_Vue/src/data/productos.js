// Importaciones de imágenes
import MotorFiat1 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat1.avif'
import MotorFiat2 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat2.avif'
import MotorFiat3 from '@/assets/img/Motores/MotorFiat1992000/MotorFiat3.avif'

import MotorFord2 from '@/assets/img/Motores/MotorFord2.2/MotorFord2.avif'
import MotorFord3 from '@/assets/img/Motores/MotorFord2.2/MotorFord2_1.avif'


import MotorMiyamoto1 from '@/assets/img/Motores/MotorMiyamoto/MotorMiyamoto.avif'
import MotorMiyamoto2 from '@/assets/img/Motores/MotorMiyamoto/MotorMiyamoto2.avif'

import MotorNissanTerrano1 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano2.avif'
import MotorNissanTerrano2 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano3.avif'
import MotorNissanTerrano3 from '@/assets/img/Motores/MotorNissanTerrano/MotorNissanTerrano.avif'


import MotorToyota1KR1_1 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_2.avif'
import MotorToyota1KR1_2 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_4.avif'
import MotorToyota1KR1_3 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.5.avif'
import MotorToyota1KR1_4 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0_3.avif'
import MotorToyota1KR1_5 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.0.avif'
import MotorToyota1KR1_6 from '@/assets/img/Motores/MotorToyota1KR1.0/MotorToyota1KR1.6.avif'

import RenaultK9KA410_1 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault2.avif'
import RenaultK9KA410_2 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault3.avif'
import RenaultK9KA410_3 from '@/assets/img/Motores/RenaultK9KA410/MotorRenault.avif'

//import CajaCambioRenaultJR5 from '@/assets/img/CajasDeCambio/CajaCambioRenaultJR5/CajaCambioRenaultJR5.avif'

//import AudiAirbag from '@/assets/img/KitsAirbag/Audi_Airbag/Audi_Airbag.avif'

// Ejemplo: importar todas las imágenes que uses
// import MotorRenaultK9KA410 from '@/assets/...'
// import AirbagGenericoReacondicionado from '@/assets/...'

// MOTORES
export const motores = [
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
    imagen: RenaultK9KA410_1
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
    imagen: MotorFiat1
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
    imagen: MotorFord2
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
    imagen: MotorMiyamoto2
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
    imagen: MotorToyota1KR1_2
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
    imagen: MotorToyota1KR1_1
  }
];


// export const cajasCambio = [
//   {
//     id: 1,
//     cajaCambios: "Toyota (6 velocidades)",
//     descripcion: "Caja revisada y lista para instalar.",
//     referencia: "6MT-TY-01",
//     tipoTransmision: "Manual",
//     velocidades: 6,
//     traccion: "Delantera",
//     codigoOEM: "TYC6-1234",
//     fabricante: "Toyota",
//     material: "Aluminio",
//     peso: "45 kg",
//     dimensiones: "70x40x35 cm",
//     fechaFabricacion: "2019-04-20",
//     precio: 850,
//     stock: 1,
//     imagen: CajaToyota6Vel
//   },
//   {
//     id: 2,
//     cajaCambios: "JR5 391",
//     descripcion: "Caja manual para Renault/Dacia.",
//     referencia: "JR5391",
//     tipoTransmision: "Manual",
//     velocidades: 5,
//     traccion: "Delantera",
//     codigoOEM: "JR5-391",
//     fabricante: "Renault/Nissan",
//     material: "Aleación de aluminio",
//     peso: "40 kg",
//     dimensiones: "65x38x32 cm",
//     fechaFabricacion: "2020-08-12",
//     precio: 780,
//     stock: 2,
//     imagen: CajaCambioJR5391
//   }
// ];


// export const airbags = [
//   {
//     id: 1,
//     airbag: "Airbag Audi A1 2021",
//     descripcion: "Incluye cinturones pretensados, reacondicionado con garantía.",
//     modelo: "Audi A1 (2021)",
//     precio: 650,
//     imagen: AirbagAudiA1
//   },
//   {
//     id: 2,
//     airbag: "Kit Airbag Genérico Reacondicionado",
//     descripcion: "Sistema de seguridad OEM reacondicionado listo para instalar.",
//     modelo: "Multimarca",
//     precio: 500,
//     imagen: AirbagGenericoReacondicionado
//   },
//   {
//     id: 3,
//     airbag: "Kit Airbag Audi",
//     descripcion: "Airbags + cinturones, reacondicionados con garantía.",
//     modelo: "Audi A3/A4",
//     precio: 700,
//     imagen: KitAirbagAudi
//   },
//   {
//     id: 4,
//     airbag: "Kit Airbag BMW",
//     descripcion: "Airbags + cinturones, reacondicionados.",
//     modelo: "BMW Serie 1/3",
//     precio: 750,
//     imagen: KitAirbagBMW
//   }
// ];


