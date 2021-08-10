/*{ ==> VERSIÓN HOOKS <== }*/
import { useState, useEffect } from "react";

const styleTipo = {
	fontFamily: 'Monospace',
    backgroundColor: '#FFFFFF',
    marginTop: '60px',
    marginBottom: '0px'
}

function Products() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
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
        <div className="fluid container">
            <h1 className="text-primary jumbotron" style={styleTipo}>Usuarios</h1>
            <span className="text-dark ms-2 h3">Total de Usuarios: </span>
            <span className="text-success h2 bold">{users.length}</span>
            <div className="my-4 mx-4 card col-7">
                { users.length === 0 && <p>Cargando</p> }
                {
                    users.map((user, i) => {
                        return(
                            <div className="row card-body shadow justify-content-center" key={i}>
                                <div className="col"> 
                                    <img width="150" height="150" src={user.avatar} alt="img"></img>
                                </div>
                                <div className="col-6"> 
                                    <h3 className="text-info">{user.name} {user.lastName}</h3>
                                    <p className="card-description text-dark">{user.email}</p>                                   
                                    <p className="card-description text-dark">{user.detail}</p>
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