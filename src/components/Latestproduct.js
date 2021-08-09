import { useState, useEffect } from "react";

function LatestProduct() {
    const [latestProduct, setLatestProduct] = useState();

    useEffect(() => {
        console.log('%chola', 'color: green');
        fetch('http://localhost:3030/api/products/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setLatestProduct([
                    " --- Nombre: ",
                    data.data.name,
                    " --- Descripción: ",
                    data.data.description,
                    " --- Marca: ",
                    data.data.brand,
                    " --- Categoría: ",
                    data.data.category,
                    " --- Color: ",
                    data.data.color,
                ]);
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%chola2', 'color: yellow');
    }, [latestProduct])

    useEffect(() => {
        console.log('%cchau', 'color: red');
    }, [])

    return(
        <div>
            <h2>Último Producto Creado:</h2>
            <ul>
                <li>
                    <h2>{latestProduct}</h2>
                    {/*<h4>{latestProduct}</h4>
                    <p>{latestProduct}</p>
                    <p>{latestProduct.category}</p>
                    <p>{latestProduct.color}</p>
                    <p>{latestProduct.url}</p>*/}
                </li>
            </ul>
        </div>
    )
}

export default LatestProduct