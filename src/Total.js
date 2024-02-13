import React, { useContext, useEffect, useState } from 'react'
import CartContext from './CartContext'
const Total = () => {
    const { cart, setcart} = useContext(CartContext)
    const [total, settotal] = useState(0)
    useEffect(() => {
        settotal(0)

        cart.forEach(prod => {
            settotal(total + prod.price)
        });
        // cart.forEach(prod => {
        //         settotal(prev => prev + prod.price)
        //     });
    }, [cart])
    
  return (
    <div><h1>Total 2 pay: {total}</h1></div>
  )
}
export default Total