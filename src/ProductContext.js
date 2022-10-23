import React, {createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState("")

    useEffect(() => {
        async function getProducts() {
          await refreshProducts()
        }
        getProducts()
      }, [])
    
      function refreshProducts() {
        return axios.get("http://localhost:3001/products")
          .then(response => {
            setProducts(response.data)
          })
      }

      function searchProducts(search) {
        return axios.get(`http://localhost:3001/products?q=${search}`)
          .then(response => {
            setSearchResults(response.data)
          })
      }
    
      function getProduct(id) {
        return products.find(product => product.id === parseInt(id))
      }
    
      function deleteProduct(id) {
        axios.delete(`http://localhost:3001/products/${id}`)
        .then(refreshProducts)
      }
    
      function addProduct(product) {
        return axios.post("http://localhost:3001/products", product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
      }
    
      function updateProduct(product) {
        return axios.put(`http://localhost:3001/products/${product.id}`, product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
      }

    
      return (
        <ProductContext.Provider
          value={{
            products,
            searchResults,
            setSearchResults,
            getProduct,
            deleteProduct,
            addProduct,
            updateProduct,
            searchProducts
          }}
        >
          {props.children}
        </ProductContext.Provider>
      )
    }