import React from 'react'
import {Card,CardImg,CardText,CardTitle} from 'reactstrap'

const SingleProduct=({product})=>{
    const img=product?.productImages?.split("uploads\\")
    console.log(img)
    
    return(
        <Card>
            <CardImg src={`http://localhost:61500/${img[1]}`}/>
    <CardTitle style={{color: "black"}}>{product.title}</CardTitle>
    <CardText>{product.author}</CardText>
        </Card>
    )

}
export default SingleProduct;