/*{ ==> VERSIÓN HOOKS <== }*/
//import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.data.list)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [products])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <ul>
                { products.length === 0 && <p>Cargando</p> }
                {
                    products.map((product, i) => {
                        return(
                            <li key={i}>
                                <h2>{product.name}</h2>
                                <h4>{product.description}</h4>
                                <p>{product.brand}</p>
                                <p>{product.category}</p>
                                <p>{product.color}</p>
                                <p>{product.url}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products