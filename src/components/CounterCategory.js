import { useState, useEffect } from 'react';

const styleCenter = {
    margin: '10px 37%'
}

function CounterCategory() {
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

    return(
        <div className="container d-flex justify-content-lg-between"  style={styleCenter}>
            <ul className="list-group">
            <h2>Totales por Categorías</h2>
            <br></br>
                <li className="list-group-item d-flex justify-content-between align-items-center shadow">
                    Teclados
                    <span className="badge bg-success rounded-pill text-light">{categories.Teclados}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center shadow">
                    Auriculares
                    <span className="badge bg-success rounded-pill text-light">{categories.Aurículares}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center shadow">
                    Mouses
                    <span className="badge bg-success rounded-pill text-light">{categories.Mouses}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center shadow">
                    Micrófonos
                    <span className="badge bg-success rounded-pill text-light">{categories.Micrófonos}</span>
                </li>
            </ul>
        </div>
    )
}

export default CounterCategory