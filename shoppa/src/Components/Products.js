import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import LoadingWidget from "./LoadingWidget"





export default function Products(){
const [products,setProducts] = useState([])







useEffect(
()=>{
 
   fetch('https://fakestoreapi.com/products/category/women\'s clothing')
       .then(res=>res.json())
    .then((json)=>{

        setProducts(

           json

        )



    }
    )



},[]



)


var productslist = products.map(
    (product)=>{

      
   return(


    <div key={product.id} className = 'productcard' >

<Link to={product.id.toString()}><img className="productimage" src = {product.image}></img></Link>



<div className = 'infobox'>
    <div className="titlebox">

    <Link to={product.id.toString()} className="producttitle">{product.title} </Link>
    </div>

<h4 className="productprice">{'$'+product.price}</h4>

</div>


</div> 
   )     

    }


)



    return (products.length>0?<div className='productscont'>{productslist}</div>:<LoadingWidget text ='all items'/>)



  



}