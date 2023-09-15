import { useContext, useState } from "react"
import { FaCartShopping } from "react-icons/fa6"
import {MyCartContext} from '../Contexts/MyCartContex.js'




export default function ProdCart(){

    const {mycartlist,setCart} = useContext(MyCartContext)


    return <div className = 'cartrow'>
<FaCartShopping className="carticon"/>

<div className = 'cartitemcount'><p className = 'count'>{mycartlist.length}</p></div>



    </div>
}