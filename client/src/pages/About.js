import React from 'react';
import Layout from '../components/Layout/Layout';

const About = () => {
    return (
        <Layout title={"About Us"}>
            <div className=' p-5 mt-10 mb-5 bg-primary text-white text-center'>
            <h1 className='fs-1'>About Page</h1>
                <h1 className='fs-1'>We serve more because we care more</h1>
                <p className='fs-5'>At Tata Motors, we believe in doing the little things that make a big difference. Whether it is the attention to detail while crafting our vehicles or the expert service and support that empowers your journeys, we want you to feel cared for at every step of the way. Because your passion for progress inspires us to serve you better every day</p>
            </div>
           
        </Layout>
    );
};

export default About;