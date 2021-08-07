import React from 'react';
import { useState, useEffect } from 'react';

function Home() {
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
        <React.Fragment>
            <div>
                <h1>Dashboard Peritroopers</h1>
                <ul>
                    <li>Productos en lista: {products.count}</li>
                    <li>Usuarios en lista: {users.count}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Home