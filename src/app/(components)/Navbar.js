export default function Navbar() {
  return <header class="p-3 text-bg-light">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <h1>Shopper</h1>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-dark">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">Categories</a></li>
          <li><a href="#" class="nav-link px-2 text-dark">Cart</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-light text-bg-light" placeholder="Search..." aria-label="Search" />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-outline-dark me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>;
}