import { useState, useEffect } from "react";

function LatestProduct() {
    const [latestProduct, setLatestProduct] = useState();

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/products/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setLatestProduct(data.data);
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [latestProduct])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    return(
        <div>
            <h2>Último Producto Creado:</h2>
            {latestProduct &&
            <ul>
                <li>Nombre: {latestProduct.name}</li>
                <li>Descripción: {latestProduct.description}</li>
                <li>Marca: {latestProduct.brand}</li>
                <li>Categoría: {latestProduct.category}</li>
                <li>Color: {latestProduct.color}</li>
            </ul>
            }
        </div>
    )
}

export default LatestProduct