import React from 'react';
import SingleProduct from './SingleProducts';
import axios from 'axios';



const HomePage=()=>{
    const [product,setProduct]=React.useState([]);
    const getData=()=>{
        axios.get("http://localhost:61500/products/").then((res)=>{
            setProduct(res.data);
            
        }).catch(err=>{
            console.log(err)
        })
    }
    React.useEffect(getData, [])

    return(
        <>
        <h1>Homepage</h1>
        <div>
        {product.length==0 ? (<p> There are no Products</p>) : (
            <div>
            {product.data.map((products,index)=>(
                <SingleProduct key={index} product={products}/>
 
            ))}
            </div>
        )} 
        </div>
</>
    )

}
export default HomePage;