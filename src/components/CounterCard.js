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
                            <h5 className="card-title">Usuarios en lista</h5>
                            <p className="card-text">{users.count}</p>
                            <Link className="btn btn-primary" to="/api/users">Ver Listado de Usuarios</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Productos en lista</h5>
                            <p className="card-text">{products.count}</p>
                            <Link className="btn btn-primary" to="/api/products">Ver Listado de Productos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterCard