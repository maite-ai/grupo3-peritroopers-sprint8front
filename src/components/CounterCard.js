import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const styleRounded = {
    margin: '10px 8.1vw',
    fontSize: '23px',
    backgroundColor: '#4e73df', 
    color: 'white',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
}
const styleButton = {
    marginLeft: '10px',
}

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
            <div className="row justify-content-md-center">
                <div className="col-sm-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-header text-center">Usuarios en lista</h5>
                            <p className="badge rounded-pill card-text" style={styleRounded}>{users.count}</p>
                            <div className= "d-grid gap-2 col-sm-6 mx-auto justify-content-md-center">
                                <Link className="btn btn-outline-primary" style={styleButton} to="/api/users">Ver Listado</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-header text-center">Productos en lista</h5>
                            <div className="badge rounded-pill card-text" style={styleRounded}>{products.count}</div>
                            <div className= "d-grid col-sm-6 mx-auto justify-content-md-center">
                                <Link className="btn btn-outline-primary" style={styleButton} to="/api/products">Ver Listado</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterCard