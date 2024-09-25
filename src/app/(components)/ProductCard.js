export default function ProductCard({ imgLink, title, text }) {
  return <>
    <div class="card h-100">
      <img src={imgLink} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          {text}
        </p>
        <div class="btn btn-success">Add to Cart</div>
      </div>
    </div>
  </>;
}
