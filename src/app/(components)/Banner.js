export default function Banner() {
  return <>
    <div class="px-4 py-5 my-5 text-center">
      <img class="d-block mx-auto mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
      <h1 class="display-5 fw-bold text-body-emphasis">Welcome to Shopper!</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Find the best products at unbeatable prices, all in one place. Shopper makes your shopping experience fast, easy, and enjoyable. Explore new arrivals, exclusive offers, and your favorite brands today!
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Start Shopping Now!</button>
        </div>
      </div>
    </div>
  </>;
}
