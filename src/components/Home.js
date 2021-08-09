import React from 'react';
import CounterCard from './CounterCard';
import CounterCategory from './CounterCategory';
import LatestProduct from './LatestProduct';
import LatestUser from './LatestUser';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
    return(
        <React.Fragment>
            <div className="container">
                <h1 className="">Dashboard Peritroopers</h1>
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