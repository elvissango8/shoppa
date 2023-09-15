import { Link } from "react-router-dom";
import mainpic from '../leftimg.png'
import leftimg from '../leftimg.jpg'
import mainimg from '../main.jpg'
export default function HomePage(){



    return (
        <div>
            
<div className="homemain">



<div className="homecontentcont">





<div style={{backgroundImage:`url(${mainimg})`,objectFit:'fill'}} className="mainpic" >

<div className="hometextcont">

<h1>Shopping Made Easy</h1>

<Link className = 'explorebutton' to = '/products'>Explore Now</Link>

</div>



</div>








</div>



</div>
<div className = 'othermai'>


<small></small>
</div>

</div>
    )


}