const products = [
    { price: 1, desc: "aaa",id:11 },
    { price: 3, desc: "bbb",id:12 },
    { price: 5, desc: "ccc",id:23 },
]
// { price: 5, desc: "ccc",id:23,amount:1 },
export const getAll=()=>{
    return products
}

export const getSingle=(ind)=>{
    return products[ind]
}  

export const getSingleById=(id)=>{
    return products.filter(x => x.id == id)[0]
}  