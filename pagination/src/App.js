import { useState, useEffect } from "react";
import "./styles.css";
import ProductCard from "./ProductCard.js";
import Pagination from "./Pagination";
// import { FiChevronsLeft,FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;
const PRODUCT_URL = "https://dummyjson.com/products?limit=200";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCT_URL);
      if (!response.ok) {
        setIsError(true);
        return;
      }
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <h1>Products Loading...</h1>;

  if (isError) return <h1>An Error Occured</h1>;

  if (!products.length) return <h1>No Products found </h1>;

  return (
    <div>
      <h1>Products</h1>
      <div className="products-container">
        {products.slice(start, end).map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.images[0]}
          />
        ))}
      </div>
      <Pagination
        totalProducts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={PAGE_SIZE}
      />
    </div>
  );
};
export default ProductsPage;
