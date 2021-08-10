import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CounterCard() {
    /*==>PRODUCTS HOOK<==*/
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data.meta);
                setProducts(data.meta)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [products])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    /*==>USERS HOOK<==*/ 
    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data.meta);
                setUsers(data.meta)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [users])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-header">Usuarios en lista</h4>
                            <p className="card-text text-center h4">{users.count}</p>
                            <div className= "d-grid gap-2 col-6 mx-auto">
                                <Link className="btn btn-outline-primary justify-content-center" to="/api/users">Ver Listado de Usuarios</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-header">Productos en lista</h4>
                            <p className="card-text text-center h4">{products.count}</p>
                            <div className= "d-grid gap-2 col-6 mx-auto">
                                <Link className="btn btn-outline-primary justify-content-center" to="/api/products">Ver Listado de Productos</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterCard