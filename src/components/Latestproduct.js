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
                <div className="card shadow">
                    <h3 className="card-header text-primary">{latestProduct.name}</h3>
                    <img src={latestProduct.image} width="200" height="200" alt="img"></img>
                    <div className="card-body">
                        <p>{latestProduct.description}</p>
                        <div>
                            <span className="text-dark">Marca: </span>
                            <span>{latestProduct.brand}</span>
                        </div>
                        
                        <div>
                            <span className="text-dark">Categoría: </span>
                            <span>{latestProduct.category}</span>
                        </div>
                        
                        <div>
                            <span className="text-dark">Color: </span>
                            <span>{latestProduct.color}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="text-success h5">$ {latestProduct.price}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default LatestProduct