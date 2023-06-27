import useCotizador from "../hooks/useCotizador"

export default function Resultado() {
    const {resultado} = useCotizador();
    if (resultado === 0) return null;
  return (
    <div>
      {resultado}
    </div>
  )
}
