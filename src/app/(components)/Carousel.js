export default function Carousel() {
  return <>
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://www.itech.ph/wp-content/uploads/2022/07/Logitech-MX-Master-3S-Performance-Wireless-Mouse-Graphite.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://www.sony.com.ph/image/86ef18640c4199cc7ce7150a5143460a?fmt=png-alpha&wid=660&hei=660" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item" >
          <img src="https://www.keychron.com/cdn/shop/products/Keychron-K11-Pro-Carrying-Case_x250@2x.jpg?v=1691569952" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </>;
}