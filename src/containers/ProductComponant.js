import React from "react";
import { useSelector } from "react-redux";


const ProductComponant = () => {

    const products = useSelector((state) => state.allProducts.myProducts)
    const {id, title} = products[1];
    console.log(id+" "+title);
    return (
        <div className="four column wide">
           <div className = "ui link card">
                <h1>ProductComponant</h1>
           </div>
        </div>
    )
}

export default ProductComponant