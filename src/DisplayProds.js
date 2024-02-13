import React, { useContext, useEffect, useState } from 'react'
import { getAll, getSingle,getSingleById } from './data'
import CartContext from './CartContext'

const DisplayProds = () => {
    const [products, setproducts] = useState([])
    const { cart, setcart} = useContext(CartContext)
    // const [cart, setcart] = useState([])
    useEffect(() => { setproducts(getAll()) }, [])
    // const buy=(id)=>{  setcart([...cart, getSingleById(id)]) }
    // useEffect(() => {
    //     console.log(cart);
    // }, [cart])
    return (
        <div>
            The first prod : {getSingle(0).desc}<br></br>
            Items: {products.length}
            {products.map(prod => <div key={prod.id} style={{ backgroundColor: "gray" }}>
                Desc:{prod.desc}<br></br>
                Price:{prod.price}
                <button onClick={()=>setcart([...cart, getSingleById(prod.id)])}>Buy</button>
                <hr></hr></div>)}

                <hr></hr>
                <h1>CART</h1>
                {cart.map(prod => <div key={prod.id} style={{ backgroundColor: "gray" }}>
                Desc:{prod.desc}<br></br>
                Price:{prod.price}
                <hr></hr></div>)}
        </div>
    )
}
export default DisplayProds