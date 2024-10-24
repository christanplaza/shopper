'use client'
import "./ProductCard.css";

export default function ProductCard({ imgLink, title, text, onAddToCart }) {
  return <>
    <div class="card h-100">
      <div className="image-container">
        <img src={imgLink} class="card-img-top" alt={title} />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {text}
        </p>
        <div class="btn btn-success" onClick={onAddToCart}>Add to Cart</div>
      </div>
    </div>
  </>;
}
