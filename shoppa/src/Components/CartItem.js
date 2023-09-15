

export default function CartItem(props){



    return (
        <div className = 'cartitemcard'>

         <img src = {props.image}></img>  

         <div className = 'cartitemright'>
<p className="carttitle">{props.title}</p>
<p className="cartprice">${props.price}</p>
<div className = 'cartitemoptions'>

<p className = 'status'>**Available</p>
<div>
<button className="cartitemremovebutton">Remove</button>

</div>
</div>
</div> 
        </div>
    )





}