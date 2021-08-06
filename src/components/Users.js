/*{ ==> VERSIÓN HOOKS <== }*/
import { useState, useEffect } from "react";

function Products() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.data)
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [users])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <ul>
                { users.length === 0 && <p>Cargando</p> }
                {
                    users.map((user, i) => {
                        return(
                            <li key={i}>
                                <h2>{user.name} {user.lastName}</h2>
                                <h4>{user.email}</h4>
                                <p>{user.detail}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Products