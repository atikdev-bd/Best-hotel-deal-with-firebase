import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogs from '../Blogs/Blogs';
import './Home.css'


const Home = () => {
    const data = useLoaderData()
    
    return (
        <div>
            <div className='home-container mb-8'>
            

            </div>
            <div className='grid  grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-4'>
               {
                data.map(info => <Blogs key={info.id} data = {info}></Blogs>)
               }
            </div>
        </div>
    );
};

export default Home;