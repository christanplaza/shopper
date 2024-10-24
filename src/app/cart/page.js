import Navbar from "../(components)/Navbar";

export default function CartPage() {
  const products = [
    { name: "Gaming Mouse", price: 5, quantity: 1 },
    { name: "Gaming Keyboard", price: 10, quantity: 1 },
  ];

  function calculateTotalAmount() {
    let totalAmount = 0;

    products.forEach(product => {
      totalAmount = totalAmount + (product.price * product.quantity)
    });

    return totalAmount;
  }

  return <>
    <Navbar />
    <div className="container">
      <h1 className="my-4">My Cart</h1>
      <table className="table mt-4">
        <thead className="table-light">
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td><button className="btn btn-danger btn-sm">Remove</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              Grand Total
            </td>
            <td>{calculateTotalAmount()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>;
}
