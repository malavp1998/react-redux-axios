
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponant from "./ProductComponant";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";



const ProductListing = () => {

    const products = useSelector((state) => state)// getting data from redux store  (state)
    console.log(products)

    //to store the data we are getting from the api we have to dispatch an action
    const dispatch = useDispatch()

    const fetchProducts = async () => {

        //  const response = await axios.get(`https://fakestoreapi.com/products`)  
        const response = await axios.get(`https://api.spacexdata.com/v3/launches`)
            .catch((err) => {
                console.log("err ", err)
            });
        // console.log(response);
        // console.log(response.data);
        dispatch(setProducts(response.data));
    };


    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <div className="ui grid container">
             <ProductComponant /> 
            {/* <h1>Chla ki nahi</h1> */}
        </div>
    )
}

export default ProductListing