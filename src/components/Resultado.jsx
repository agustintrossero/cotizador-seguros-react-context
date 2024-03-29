import { useCallback , useRef } from "react";
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants";

export default function Resultado() {
    const {resultado, datos} = useCotizador();
    const {marca, plan, year} = datos;
    const yearRef = useRef(year);


    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), 
      [resultado]
    )
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)), 
      [resultado]
    )

    if (resultado === 0) return null;
  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 fontblack text-3xl">
        Resumen
      </h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span></p>
        {nombreMarca.nombre}
      <p className="my-2">
        <span className="font-bold">Plan: </span></p>
        {nombrePlan.nombre}
      <p className="my-2">
        <span className="font-bold">Año del Auto: </span></p>
        {yearRef.current}
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span></p>
        {resultado}
    </div>
  )
}
