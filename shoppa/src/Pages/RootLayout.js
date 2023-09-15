import { NavLink, Outlet } from "react-router-dom";
import ProdCart from "../Icons/ProdCart";
import onalogo from "../onalogo.png"

export default function RootLayout(){

 
return (
<div className="rootlayout">   
    
<nav className = 'nav'>
<NavLink to = 'home'>

<img className = 'onalogo' src = {onalogo}></img>
</NavLink>


<div className = 'links'> 

<NavLink to = 'Home'>Home</NavLink>

<NavLink to = 'products'>Products</NavLink>

<NavLink to = 'about'>About</NavLink>
<NavLink to = 'about'>Sign in</NavLink>
<NavLink to = 'mycart'><ProdCart></ProdCart></NavLink>
</div>

</nav> 

<div className = 'maincont'>
<Outlet></Outlet>

</div>
  
      </div>
)




}