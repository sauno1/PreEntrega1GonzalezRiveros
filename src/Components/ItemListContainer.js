import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import './styles.css';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const { category } = useParams();

  useEffect(() => {
    const fetchData = () => {
      const productsCollection = collection(db, "products");
      getDocs(productsCollection)
        .then((res) => {
          const aux = res.docs.map((doc) => {
            const product = doc.data();
            product.id = doc.id;
            return product;
          });

          if (category) {

            const filteredProducts = aux.filter((product) => product.category === category);
            setData(filteredProducts);
          } else {

            setData(aux);
          }
        })
        .catch((error) => {
          setError("Error al cargar los productos");
        });
    };

    fetchData();
  }, [category]);

  return (
    <div>
    {error && <p>{error}</p>}
    <div className="product-list">
      {data.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <p>Precio: ${product.price}</p>
          <p>Categoría: {product.category}</p>
          <img className="product-image" src={product.image} alt={product.title} />
          <Link to={`/item/${product.id}`} className="view-button">
            Ver más
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ItemListContainer;



