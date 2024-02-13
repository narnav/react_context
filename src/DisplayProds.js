import React, { useContext, useEffect, useState } from 'react'
import { getAll, getSingle, getSingleById } from './data'
import CartContext from './CartContext'

const DisplayProds = () => {
    const [products, setproducts] = useState([])
    const { cart, setcart } = useContext(CartContext)
    // const [cart, setcart] = useState([])
    useEffect(() => { setproducts(getAll()) }, [])

    const buy = (id) => {
        const newProd = getSingleById(id)

        const test = cart.filter(x => x.id === id)
        if (test.length > 0) {
            cart.filter(x => x.id === id)[0].amount += 1
            setcart([...cart])
        }
        else {
            newProd.amount = 1
            setcart([...cart, newProd])
        }

    }
    const remove = (id) => { setcart(cart.filter(x => x.id != id)) }

    return (
        <div>
            The first prod : {getSingle(0).desc}<br></br>
            Items: {products.length}
            {products.map(prod => <div key={prod.id} style={{ backgroundColor: "gray" }}>
                Desc:{prod.desc}<br></br>
                Price:{prod.price}
                <button onClick={() => buy(prod.id)}>Buy</button>
                <hr></hr></div>)}

            <hr></hr>
            <h1>CART</h1>
            {cart.map((prod, ind) => <div key={crypto.randomUUID()} style={{ backgroundColor: "gray" }}>
                Desc:{prod.desc}<br></br>
                Price:{prod.price}
                amonut:{prod.amount}
                <button onClick={() => remove(prod.id)}>Remove</button>
                <hr></hr></div>)}
        </div>
    )
}
export default DisplayProds