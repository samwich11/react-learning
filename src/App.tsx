import { useEffect, useState } from 'react'
import './App.css'

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

function App() {
  // const [data, setData] = useState<Post[]>([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const consoleLoader = (loadingValue: boolean) => {
    setLoading(loadingValue)
    console.info(loading)
  }

  const fetchData = async () => {
    // setLoading(true)
    consoleLoader(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')

      if(!response.ok) {
        throw new Error("Error al obtener datos")
      }
      
      const jsonData = await response.json()
      setData(jsonData)
    } catch (err) {
      // console.error(err)
      setError(err as string)
    } finally {
      // setLoading(false)
      consoleLoader(false)
    }
  }
  
  // Usos de useEffect
  // Cuando nos comunicamos con un endpoint - entidad externa al componente
  // Operación async
  // Parámetros de entrada (como props, que son externos al componente)
  // Sync con entidades externas

  useEffect(() => {
    // 1 - Cuando se renderiza (monta, aparece) el componente
    // 2 - Cada vez que se modifique alguno de los valores del state
    fetchData()
    // return () => {}
  }, [])
  
  if(loading) {
    return <div>Cargando...</div>
  }

  if(error) {
    return <div>UPS! Hay un error: {error}</div>
  }

  return (
    <>  
      <div className='w-full bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-5'>
        <p className='text-xl italic font-bold'>La data es: </p>
        <div>{JSON.stringify(data)}</div>
        {/* <div>{JSON.stringify(data.map((item) => item.title))}</div> */}
      </div>
    </>
  )
}

export default App
