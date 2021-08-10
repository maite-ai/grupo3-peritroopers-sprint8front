/*{ ==> VERSIÓN HOOKS <== }*/
import { useState, useEffect } from "react";

const styleTipo = {
	fontFamily: 'Monospace',
    backgroundColor: '#FFFFFF',
    marginTop: '60px',
    marginBottom: '0px'
}

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
        <div className="container">
            <h1 className="text-primary jumbotron" style={styleTipo}>Productos</h1>
            <span className="text-dark h3">Total de Productos: </span>
            <span className="text-success h2 bold">{products.length}</span>
            <div className="row d-grid gap-3">
                { products.length === 0 && <p>Cargando</p> }
                {
                    products.map((product, i) => {
                        return(
                            <div className="my-4 mx-4 card shadow col-md-5" key={i}>
                                <div className="text-center my-4">
                                    <img src={product.image} width="260" height="260" alt="img"></img>
                                </div>
                                <div className="card-body">
                                <h4 className="text-info text-left">{product.name}</h4>
                                    <p className="card-description">{product.description}</p>
                                </div>
                                <div className="card-footer">
                                    <div>
                                        <span className="text-dark bold">Marca: </span>
                                        <span>{product.brand}</span>
                                    </div>
                                    <div>
                                        <span className="text-dark bold">Categoría: </span>
                                        <span>{product.category}</span>
                                    </div>
                                    <div>
                                        <span className="text-dark bold">Color: </span>
                                        <span>{product.color}</span>
                                    </div>
                                    <span className="text-primary">{product.url}</span>
                                </div>    
                            </div>                                 
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products