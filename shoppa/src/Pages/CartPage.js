import { useContext } from 'react'
import CartItem from '../Components/CartItem'
import { MyCartContext } from '../Contexts/MyCartContex'
import ecocash from '../ecocash.png'

export default function CartPage(){

const {mycartlist,setCart} = useContext(MyCartContext)

const totalprice = mycartlist.reduce(
    (accumulator,currentv)=>{
        return accumulator+currentv.price
    },0
)

var total = totalprice+5;
const mycartitems = mycartlist.filter((item)=>{
    if(item.id!=14)
    return true
}).map(
    (item)=>{
return <CartItem id = {item.id} image = {item.image} price = {item.price} title ={item.title}></CartItem>
    }
)

return (


mycartlist.length>0?

    <div className = 'cartpagemain'> 
    
    <div className="cartnav">
<h1>My Shopping Cart Items</h1>

    </div>

    <div className = 'cartpageitemscont'>


<div className='cartlist'>
{

mycartitems
}
</div>


<div className='cartitemspageright'>
<h3>Checkout Below</h3>
    <div  className='totalscont'>
        
        <div className='totalsnames'>
        <p>Subtotal</p>
    <p>Total (Incl Vat)</p>
        </div>
    
        <div className='totalsprices'>
        <p>${totalprice.toFixed(2)}</p>
    <p>${(totalprice+5).toFixed(2)}</p>
        </div>

    </div>
<button className = 'checkoutbutton' onClick={
    ()=>{
        alert('Your account has been debited with '+total)
    }
  
}>Ecocash Checkout</button>

<div className='econetlogocont'>
<span className='poweredby'>Powered by </span>
<img className = 'econetlogo' src = {ecocash}></img>
</div>

</div>
    </div>  
    


    
    
    
    
    </div>:
    <div className='emptycart'>
<h1>No Items in Cart</h1>

    </div>
)


}