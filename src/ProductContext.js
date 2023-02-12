import React, {createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext()

export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])
    const [searchResults, setSearchResults] = useState("")

    let baseUrl = `https://react-shop-inventory.herokuapp.com/products`;

    useEffect(() => {
        async function getProducts() {
          await refreshProducts()
        }
        getProducts()
      }, [])
    
      function refreshProducts() {
        return axios.get(baseUrl)
          .then(response => {
            setProducts(response.data)
          })
      }

      function searchProducts(search) {
        return axios.get(`${baseUrl}?q=${search}`)
          .then(response => {
            setSearchResults(response.data)
          })
      }
    
      function getProduct(id) {
        return products.find(product => product.id === parseInt(id))
      }
    
      function deleteProduct(id) {
        axios.delete(`${baseUrl}/${id}`)
        .then(refreshProducts)
      }
    
      function addProduct(product) {
        return axios.post(`${baseUrl}`, product)
        .then(response => {
          refreshProducts()
          return new Promise((resolve) => resolve(response.data))
        })
      }
    
      function updateProduct(product) {
        return axios.put(`${baseUrl}/${product.id}`, product)
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