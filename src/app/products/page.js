'use client'
import { useState } from "react";
import Navbar from "../(components)/Navbar";
import products from "@/app/(sample_data)/products.json";
import ProductCard from "../(components)/ProductCard";

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    // Look for a product that matches productId in the products list.
    const productToAdd = products.find(product => product.id === productId);
    // If we found a product
    if (productToAdd) {
      // insert the new product to the cart (prevcart has the products that you already have in cart)
      setCart((prevCart) => [...prevCart, productToAdd]);
    }
  }

  return <>
    <Navbar />
    <div className="container">
      <h1 className="text-center mt-4">Products</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map((product, index) => (
          <div className="col" key={index}>
            <ProductCard imgLink={product.image} title={product.name} text={product.description} onAddToCart={() =>
              addToCart(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  </>;
}
