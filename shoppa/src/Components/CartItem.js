import { useContext } from "react";
import { MyCartContext } from "../Contexts/MyCartContex";


export default function CartItem(props){

    const {mycartlist,setCart}=useContext(MyCartContext)

    function removeItem(i){

  const filtered=  mycartlist.filter((item)=>{
            return item.id!==i;
            
                })


        setCart(
   filtered
    
        )
    
    
    
    }
    


    return (
        <div className = 'cartitemcard'>

         <img src = {props.image}></img>  

         <div className = 'cartitemright'>
 <div className='cartitemtitlecont'>          
<p className="carttitle">{props.title}</p>
</div> 
<p className="cartprice">${props.price}</p>
<div className = 'cartitemoptions'>

<p className="status">Available</p>

<button className="cartitemremovebutton" onClick={
    ()=>removeItem(props.id)}>Remove</button>

</div>
</div> 
        </div>
    )





}