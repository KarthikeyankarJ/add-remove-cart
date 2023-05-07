import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const data = [
  {
  productImage : "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/7/3/l/-original-imagha3pvvc2xuz2.jpeg?q=70",
  productNmae : "MSI Bravo 15",
  productprice : 47990,
  rating : 4.4,
  id:1
},
{
  productImage : "https://rukminim1.flixcart.com/image/416/416/l4oi4cw0/computer/i/n/e/a715-5g-gaming-laptop-acer-original-imagfj2g954wfdyz.jpeg?q=70",
  productNmae : "Acer Aspier 7",
  productprice : 52900,
  rating : 4.3,
  id:2
},
{
  productImage : "https://rukminim1.flixcart.com/image/416/416/l3vxbbk0/computer/g/u/y/-original-imagewgtfgzf8fdd.jpeg?q=70",
  productNmae : "ASUS ROG Strix G15",
  productprice : 84990,
  rating : 4.4,
  id:3
},
{
  productImage : "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/s/o/f/16-e0650ax-gaming-laptop-hp-original-imagkzqetd9hbwru.jpeg?q=70",
  productNmae : "HP Victus",
  productprice : 60990,
  rating : 3.9,
  id:4
},
{
  productImage : "https://rukminim1.flixcart.com/image/416/416/kzn17680/computer/1/i/z/-original-imagbhzqahdzyx4e.jpeg?q=70",
  productNmae : "HP OMEN",
  productprice : 68048,
  rating : 4.4,
  id:5,
},
{
  productImage : "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/g/8/z/-original-imaghzahbkhsvhyb.jpeg?q=70",
  productNmae : "Dell Gaming",
  productprice : 68990,
  rating : 3.9,
  id:6
}


]

function App() {

  const [cartcount, setcartcount] = useState(0)

  return (
    <div className="App">
      <div >
        <header className='nav'>
          <div className='logo'>
              <div>ReactJS</div>
          </div>

          <nav>
            <ul className='nav-list'>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li className='but'><span class="material-symbols-outlined">
shopping_cart
</span><button className='count'>{cartcount}</button></li>
            </ul>
          </nav>
        </header>
        </div>
        <div className='mid'>
          <div className='midcont'>Gamer Laptop</div>
          <div>THE CHOISE OF CHAMPIONS</div>
        </div>
      <div className='Detail'>
      {data.map((prod, indx)=>(
        <ProductCard 
        key = {prod.id}
        productimage = {prod.productImage}
        productmodel = {prod.productNmae}
        productprice = {prod.productprice}
        rating = {prod.rating}
        cartcount = {cartcount}
        setcartcount ={setcartcount}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

function ProductCard({productimage, productmodel, productprice, rating, cartcount,setcartcount}) {
  const [show, setshow] = useState(true)

  const handleaddcart = () =>{
    setshow(!show)
    setcartcount(cartcount+1)
  }

  const handleremovecart = () =>{
    setshow(!show)
    setcartcount(cartcount-1)
  }



  return (
    <div className="card">
      <img className='productimg'
        src= {productimage}
        alt="productimage"
      />
      <div className='content'>
        <h4>{productmodel}</h4>
        <p><span id="go" class="material-symbols-outlined">
        currency_rupee
        </span><span className='price'>{productprice}</span></p>
        <p className='rating'><span id="ratingid" class="material-symbols-outlined">
star_rate
</span><span>{rating}</span></p>
      </div>
      {show ? <button className='but1' onClick={handleaddcart}>Add to cart</button>: <button className='but2' onClick={handleremovecart}>Remove cart</button> }
    </div>
  );
}
