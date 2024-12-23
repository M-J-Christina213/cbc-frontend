import './Homepage.css';
export default function Homepage() {
    return (
      <div className="homepage">
        <header className="header">
          <h1>Beauty Essentials</h1>
          <p>Your one-stop shop for beauty products</p>
        </header>
        <Link to="/login"> Login </Link>
        <section className="products">
          <h2>Our Top Picks</h2>
          <div className="product-item">
            <img src="product-image-1.jpg" alt="Product 1" />
            <p>Product Name 1</p>
          </div>
          <div className="product-item">
            <img src="product-image-2.jpg" alt="Product 2" />
            <p>Product Name 2</p>
          </div>
          <div className="product-item">
            <img src="product-image-3.jpg" alt="Product 3" />
            <p>Product Name 3</p>
          </div>
        </section>
        <footer>
          <p>Contact us at: beauty@example.com</p>
        </footer>
      </div>
    );
  }
  