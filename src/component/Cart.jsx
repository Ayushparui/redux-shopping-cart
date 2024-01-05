import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFood } from "../feature/cart";
import "./Cart.css";

function Cart() {
 
    const [cartData, setCartData] = useState()
    const [totalAmount, setTotalAmount] = useState(0)
 
    const selector = useSelector(state => state.cart.foods)

    useEffect(() => {
        setCartData(selector)
    }, [cartData])

    const dispatch = useDispatch()

    const remove = (itemId) => {
        dispatch(removeFood(itemId))
       
    }
    useEffect(() => {
        setCartData(selector)
    }, [cartData])

   

    const calculateTotalAmount = () => {
        if (cartData) {
            const amt =  cartData.reduce((total, item) => total + item.price, 0);
            setTotalAmount(amt)
        } else {
            return 0;
        }
    }
    

  return (
    <>
    <h1>Cart</h1>
      {cartData && cartData.map((item) => (
        <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <img src={item.image} alt="" className="image"/>
            <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={calculateTotalAmount}>Cal</button>
      <h4>Total AMount: {totalAmount}</h4>
    </>
  );
}

export default Cart;
