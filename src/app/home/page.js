import Alert from "../(components)/Alert";
import Badge from "../(components)/Badge";
import Banner from "../(components)/Banner";
import Carousel from "../(components)/Carousel";
import Navbar from "../(components)/Navbar";
import ProductCard from "../(components)/ProductCard";

export default function HomePage() {
  return <>
    <Navbar />
    <Banner />

    <div className="container">
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
          <ProductCard
            imgLink={"https://www.keychron.com/cdn/shop/products/Keychron-K11-Pro-Carrying-Case_x250@2x.jpg?v=1691569952"}
            title={"Keychron K11 Max QMK/VIA Wireless Custom Mechanical Keyboard"}
            text={"Keychron K11 Max is an ultra-slim wireless custom mechanical keyboard. It supports 2.4 GHz, Bluetooth, and a wired connection."}
          />
        </div>
        <div class="col">
          <ProductCard
            imgLink={"https://m.media-amazon.com/images/I/71iRWPgRWnL._AC_SL1500_.jpg"}
            title={"Herman Miller Embody Carbon Balance Chair"}
            text={"The Embody Chair promotes good posture and makes you feel like you're floating, providing ergonomic support while allowing you to move."}
          />
        </div>
      </div>
    </div>
  </>;
}
