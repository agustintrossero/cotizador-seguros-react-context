import { defaults } from "autoprefixer"
import { createContext } from "react"

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const hola = "hola mundo"
    const fnHola = () => {
        console.log("Hola Mundo desde una funcion")
    }

    return(
        <CotizadorContext.Provider
            value={{
                hola: hola,
                fnHola
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