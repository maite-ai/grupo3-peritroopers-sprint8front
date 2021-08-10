import React from 'react';
import CounterCard from './CounterCard';
import CounterCategory from './CounterCategory';
import LatestProduct from './LatestProduct';
import LatestUser from './LatestUser';

const styleTipo = {
	fontFamily: 'Monospace',
    backgroundColor: '#FFFFFF',
    marginTop: '60px',
    marginBottom: '0px'
}

function Home() {
    return(
        <React.Fragment>
            <div className="container">
                <h1 className="text-center text-info jumbotron" style={styleTipo}>Dashboard Peritroopers</h1>
                <CounterCard/>
                <br/><br/>
                <CounterCategory/>
                <br/><br/>
                <div className="row">
                    <div className="col-sm-6">
                        <LatestProduct/>
                    </div>
                    <div className="col-sm-6">
                        <LatestUser/>
                    </div>                
                </div>
                
            </div>
        </React.Fragment>
    )
}

export default Home