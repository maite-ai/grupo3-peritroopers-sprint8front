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
        <div>
            <h2>Último Usuario Creado:</h2><br/>
            {latestUser &&
                <div>
                    <img src={latestUser.avatar} width="200" height="200" alt="img"></img>
                    <h3>{latestUser.name} {latestUser.lastName}</h3>
                    <p>Fecha de Nacimiento: {latestUser.birthDate}</p>
                    <p>Email: {latestUser.email}</p>
                </div>
            }
        </div>
    )
}

export default LatestUser