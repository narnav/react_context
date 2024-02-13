import React, { useEffect, useState } from 'react'
import { getAll, getSingle } from './data'
import DisplayProds from './DisplayProds'
import CartContext from './CartContext'
import Total from './Total'

const App = () => {
    const [cart, setcart] = useState([])
    return (
        <div>
            <CartContext.Provider value={{ cart, setcart }}>
                <h1>Items in cart:{cart.length}</h1>
                <DisplayProds></DisplayProds>
                <Total></Total>
            </CartContext.Provider>
        </div>
    )
}
export default App
