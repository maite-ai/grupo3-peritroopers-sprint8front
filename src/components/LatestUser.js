import { useState, useEffect } from "react";

function LatestUser() {
    const [latestUser, setLatestUser] = useState();

    useEffect(() => {
        console.log('%cse montó el componente', 'color: green');
        fetch('http://localhost:3030/api/users/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setLatestUser(data.data);
            })
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        console.log('%cse actualizó el componente', 'color: yellow');
    }, [latestUser])

    useEffect(() => {
        console.log('%cse desmontó el componente', 'color: red');
    }, [])

    return(
        <div class="container">
            <h2 className="text-dark text-center">Último Usuario Creado</h2><br/>
            {latestUser &&
                <div className="card">
                    <div className="row card-body">
                        <div className="col">
                            <img className="img-fluid img-thumbnail rounded" src={latestUser.avatar} alt="img"></img>
                        </div>
                        <div className="col-7">
                            <h3 className="text-primary">{latestUser.name} {latestUser.lastName}</h3>
                            <div>
                                <span className="h6 text-dark">Fecha de Nacimiento: </span>
                                <span> {latestUser.birthDate}</span>
                            </div>
                            <div>
                                <span className="h6 text-dark">Email: </span>
                                <span>{latestUser.email}</span>
                            </div>
                        </div>                        
                    </div>
                </div>
                
                
            }
        </div>
    )
}

export default LatestUser