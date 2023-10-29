import React from 'react';
import Layout from '../components/Layout/Layout';

const Contact = () => {
    return (
        <Layout  title={"Contact Us"}>
            <div className='text-center'>
            <h1 className='bg-dark p-2 text-white text-center'>Contact Us</h1>
            <h3 className='text-justify mt-3 mb-5 fs-1'>Any query and info about car,<br></br>
             please feel free to call anytime!. <br></br>
             We are Available</h3>
            <p className='mt-3 fs-3'>: www.VehicleShop.com</p>
            <p className='mt-3 fs-3'>: +8802314567894</p>
            <p className='mt-3 fs-3'>: 1800-0000-0000 (toll free)</p>
            </div>
            
        </Layout>
    );
};

export default Contact;