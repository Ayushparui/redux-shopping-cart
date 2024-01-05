import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Food from './component/Food'
import Cart from './component/Cart'


function App() {

  const [food, setFood] = useState()

  const getFood = async () => {
    try {
      const getFood = await axios.get('http://localhost:3030/food')
      setFood(getFood.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFood()
  }, [])

  console.log(food)

  return (
    <>
      <nav className='nav-bar'>
        <div className='logo'>Logo</div>
        <div className='search'>
          <input type="text"
          placeholder='Search'
          />
        </div>
        <div className='ul'>
          <ul>
            <li>Categories</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>
      </nav>
      <section className='food'>
        {food && food.map((item) => (
          <div key={item.id}>
           <Food
           img = {item.img}
           id = {item.id}
            name = {item.name}
            price = {item.price}
          />
          </div>
        )
        )}
      </section>
      <section className='cart'>
        <Cart
        
        />
      </section>
    </>
  )
}

export default App
