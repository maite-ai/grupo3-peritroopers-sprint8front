import React from 'react';
import CounterCard from './CounterCard';
import CounterCategory from './CounterCategory';
import LatestProduct from './LatestProduct';
import LatestUser from './LatestUser';

function Home() {
    return(
        <React.Fragment>
            <div className="container">
                <h1 className="text-center text-primary font-weight-bold">Dashboard Peritroopers</h1>
                <br/>
                <CounterCard/>
                <br/><br/>
                <CounterCategory/>
                <br/><br/>
                <LatestProduct/>
                <br/><br/>
                <LatestUser/>
            </div>
        </React.Fragment>
    )
}

export default Home