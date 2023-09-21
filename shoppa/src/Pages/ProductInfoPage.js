import { useContext, useEffect, useState, } from "react"
import { useParams } from "react-router-dom"
import LoadingWidget from "../Components/LoadingWidget"
import { MyCartContext} from "../Contexts/MyCartContex"


export default function ProductInfoPage(){

const {id} = useParams()
const [product,setProduct] = useState({})
const {mycartlist,setCart} = useContext(MyCartContext);


function addItemToCart(){

//First checking if the cart doesnt already contain the item we want to add
 var contains =  mycartlist.find((item)=>{
     
    return item.id === product.id
    })

  if(contains){
    alert(`${product.title} already added, open the Cart page to change the quantity`)
  }  

    if(!contains){

        //adding when it does not contain
        setCart(

        
        
            (prevcart)=>{
    
                return [...prevcart,{'id':product.id,'title':product.title,'description':product.description,
            'price': product.price,'image':product.image}]
            }
            
            
            )
    
    }



}



useEffect(
    ()=>{
     
       fetch('https://fakestoreapi.com/products/'+id)
           .then(res=>res.json())
        .then((json)=>{
    
            setProduct(
    
               json
    
            )
    
    
    
        }
        )
    
    
    
    },[]
    
    
    
    )






    return (
      
      
 product.title?<div className = 'productinfomain'>

<div className="infoleftbar">

<img src = {product.image}></img>

</div>

<div className="inforightbar">


<h3>{product.title}</h3>

<p>{product.description}</p>

<h5 className = 'infoprice'>Price : ${product.price}</h5>

<button onClick={addItemToCart}>Add to cart</button>

</div>


        </div>:<LoadingWidget text ='selected item'/>
    )

}