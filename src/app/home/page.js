import Banner from "../(components)/Banner";
import ProductCard from "../(components)/ProductCard";

export default function HomePage() {
  return <>
    <header class="p-3 text-bg-light">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            Shopper
          </a>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-dark">Home</a></li>
            <li><a href="#" class="nav-link px-2 text-dark">Product Categories</a></li>
            <li><a href="#" class="nav-link px-2 text-dark">Cart</a></li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" class="form-control form-control-light text-bg-light" placeholder="Search..." aria-label="Search" />
          </form>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>

    <Banner />

    <div className="container">

      {/* Turn this into a component, and using PROPS for the text! */}
      {/* Name of Component: Alert */}
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <ProductCard
            imgLink={"https://www.itech.ph/wp-content/uploads/2022/07/Logitech-MX-Master-3S-Performance-Wireless-Mouse-Graphite.jpg"}
            title={"Logitech MX Master 3S Performance Wireless Mouse [Graphite]"}
            text={"Meet MX Master 3S – an iconic mouse remastered."}
          />
        </div>
        <div class="col">
          <ProductCard
            imgLink={"https://www.sony.com.ph/image/86ef18640c4199cc7ce7150a5143460a?fmt=png-alpha&wid=660&hei=660"}
            title={"WH-1000XM5 Wireless Noise-Canceling Headphones"}
            text={"The best noise canceling3 with two high-performance processors and eight microphones"}
          />
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://www.keychron.com/cdn/shop/products/Keychron-K11-Pro-Carrying-Case_x250@2x.jpg?v=1691569952" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Keychron K11 Max QMK/VIA Wireless Custom Mechanical Keyboard</h5>
              <p class="card-text">
                Keychron K11 Max is an ultra-slim wireless custom mechanical keyboard. It supports 2.4 GHz, Bluetooth, and a wired connection. It allows anyone to master any keys or macro commands on its 65% Alice layout through Keychron Launcher web app. Besides, it has included LSA (low profile spherical-angled) profile keycaps for both Windows and macOS, and users can hot-swap with Gateron low-profile MX mechanical switch in a breeze (for RGB Backlight Hot-Swappable Version only).
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://m.media-amazon.com/images/I/71iRWPgRWnL._AC_SL1500_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Herman Miller Embody Carbon Balance Chair</h5>
              <p class="card-text">
                The Embody Chair promotes good posture and makes you feel like you're floating, providing ergonomic support while allowing you to move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}
