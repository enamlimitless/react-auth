import React, { useEffect, useState } from 'react';
import './Home.css';
import FakeData from '../../FakeData/data.json';
import Header from '../Header/Header';

const Home = () => {
    const [car, setCar] = useState([]);
    useEffect(() =>{
        setCar(FakeData); 
        // console.log(car[0])
    },[])
    console.log(car[0])
    return (
        <div className="style">
            {
                FakeData.map(car => <Header key={car.id} car={car}></Header>)
            }
        </div>
    );
};

export default Home;