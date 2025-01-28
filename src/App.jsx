import { useState } from 'react'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'
import './App.css'


function App() {
    //db
    const [data, setData] = useState(db)

    //state
    const [cart, setCart] = useState([])

    function addToCart(item) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id )
        if(itemExists >= 0) {
            //existe, actualizo cantidad
            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)
        } else {
            //no existe , agregando
            item.quantity = 1
            setCart(prevCart => [...cart, item])
        }
        
    }

  return (
    <>
    <Header 
        cart={cart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar 
                    key={guitar.id}
                    guitar={guitar}
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                />
            ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
