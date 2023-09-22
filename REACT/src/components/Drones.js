import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Drones() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    
    fetch(`http://localhost:3050/products/api/products?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [currentPage]);

  const goToPage = (pageNumber) => {

    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='listado-de-usuarios'>
      <h3>Listado de Productos</h3>
      <div className='seccion-usuarios'>
        <ul className="ul-users">
          {products.map((product) => (
            <li className="user-card" key={product.id}>
              <div className="user-info">
                <p>ID: {product.id}</p>
                <p>Nombre: {product.name}</p>
                <p>Descripción: {product.description}</p>
              </div>
              <div className="list-img-container">
                <a href={product.detail}>
                  <img className='profilePics' src={`http://localhost:3050${product.image}`} alt="" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='botones'>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="pagination-item">
              <button onClick={() => goToPage(number)}>{number}</button>
            </li>
          ))}
        </ul>
      </div>
      {location.pathname === "/drones" && (
        <Link to="/dashboard">
          <button style={{
      display: 'inline-block',
      marginRight: '20px',
      padding: '10px 10px',
      backgroundColor: '#09736Cff',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
    }}>
            Volver a la página principal
            </button>
        </Link>
        )}
    </div>
  );
}

export default Drones;


