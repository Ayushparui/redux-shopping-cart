import "./Food.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { addCart } from "../feature/cart"

function Food({id, img, name,price}){

    const [carti, setCart] = useState()

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.foods)
    const add = () => {
        dispatch(addCart({id, name, img, price}))
        useEffect(() => {
            setCart(cart)
        }, [cart])
    }
    

    // useEffect(() => {
    //     setCart(cart)
    // }, [cart])
    
    console.log(carti)
return(
    <>
        <div className="card">
            <p>Id: {id}</p>
            <img src={img} alt="" className="image"/>
            <h1>Name: {name}</h1>
            <h2>Price: {price}</h2>
            <button onClick={add}>Add</button>
            
        </div>


    </>
)
}
export default Food