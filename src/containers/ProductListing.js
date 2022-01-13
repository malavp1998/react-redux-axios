
import React, {useEffect} from "react";
import  {useSelector } from "react-redux";
import ProductComponant from "./ProductComponant";
import axios from "axios";


const ProductListing = ()=>{
   
    const products = useSelector((state) => state)
    //console.log(products)

    const fetchProducts = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products`)
        .catch((err) =>{
            console.log("err ", err)
        });
        console.log(response.data);
    }
    
    useEffect( () =>{
           fetchProducts();
    } ,[] );


    return(
        <div className = "ui grid container">
           <ProductComponant />
        </div>
    )
}

export default ProductListing