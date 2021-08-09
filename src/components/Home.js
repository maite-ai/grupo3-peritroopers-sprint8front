import React from 'react';
import LatestProduct from './LatestProduct';
import LatestUser from './LatestUser';
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

    /*==><==*/
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/products')
            .then(response => response.json())
            .then(data => {
                console.log(data.meta.countByCategory);
                setCategories(data.meta.countByCategory)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [categories])

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
            <div className="container">
                <h1 className="">Dashboard Peritroopers</h1>
                <ul>
                    <li><div>Usuarios en lista: {users.count}</div></li>
                    <li>Productos en lista: {products.count}</li>
                    <li>
                        Total por Categoría:
                        <ul>
                            <li>Teclados: {categories.Teclados}</li>
                            <li>Auriculares: {categories.Aurículares}</li>
                            <li>Mouses: {categories.Mouses}</li>
                            <li>Micrófonos: {categories.Micrófonos}</li>
                        </ul>
                    </li>
                </ul>
                <LatestProduct/>
                <br/>
                <LatestUser/>
            </div>
        </React.Fragment>
    )
}

export default Home