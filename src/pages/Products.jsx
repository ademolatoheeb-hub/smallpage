import { useEffect, useState } from "react";

function Products() { 
const [products, setProducts] = useState([]); 
const [loading, setLoading] = useState(true); const [error, setError] = useState(null);

useEffect(() => { const fetchProducts = async () => { 
try { const response = await fetch("https://fakestoreapi.com/products"); 
if (!response.ok) { throw new Error("Failed to fetch products"); } 
const data = await response.json(); setProducts(data); } 
catch (err) { setError(err.message); } finally { setLoading(false); } };

fetchProducts();

}, []);

if (loading) { return <p>Loading products...</p>; }

if (error) { return <p>{error}</p>; }

return ( <div style={{background: "#f1f1f1"}}> 
          <h1>Products</h1>
        <div>
    {products.map((product) => (
      <div
        key={product.id}
      >
        <p>{product.title}</p>
      </div>
    ))}
  </div>
</div>

); }

export default Products;