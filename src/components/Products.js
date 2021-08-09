/*{ ==> VERSIÓN HOOKS <== }*/
import { useState, useEffect } from "react";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data.data.list);
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
            <h2>Total de Productos: {products.length}</h2>
            <ul>
                { products.length === 0 && <p>Cargando</p> }
                {
                    products.map((product, i) => {
                        return(
                            <li key={i}>
                                <h2>{product.name}</h2>
                                <img src={product.image} width="200" height="200" alt="img"></img>
                                <h4>{product.description}</h4>
                                <p>Marca: {product.brand}</p>
                                <p>Categoría: {product.category}</p>
                                <p>Color: {product.color}</p>
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