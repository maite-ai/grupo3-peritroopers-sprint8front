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
            <h2>Último Producto Creado:</h2><br/>
            {latestProduct &&
                <div>
                    <h3>{latestProduct.name}</h3>
                    <img src={latestProduct.image} width="200" height="200" alt="img"></img>
                    <p>{latestProduct.description}</p>
                    <p>Marca: {latestProduct.brand}</p>
                    <p>Categoría: {latestProduct.category}</p>
                    <p>Color: {latestProduct.color}</p>
                </div>
            }
        </div>
    )
}

export default LatestProduct