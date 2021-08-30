import React from 'react'
import ProductComponent from './ProductComponent'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'
import { setProducts } from "../Redux/Actions/productActions"


export default function ProductList() {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const getProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch(err => {
                console.log("Data not Received", err)
            })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        getProducts()
    }, []);
    console.log("products: ", products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}
