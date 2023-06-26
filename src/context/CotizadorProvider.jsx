import { createContext, useState } from "react"
import { obtenerDiferenciaYear, calcularMarca, calcularPlan } from "../helpers"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')

    const handleChangeDatos = e => {
        /* console.log(e.target.name)
        console.log(e.target.value) */
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
    }

    const cotizarSeguro = () =>{
        // Una base
        let resultado = 2000

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        //console.log(diferencia)


        // Hay que restar el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        
        // Europeo 30%
        // Americano 15%
        // Asiatico 5%
        resultado *= calcularMarca(datos.marca)
        
        // Básico 20%
        // Completo 50%
        resultado *= calcularPlan(datos.plan)
        resultado = resultado.toFixed(2)
        //console.log(resultado)
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext