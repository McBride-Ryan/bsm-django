import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const layout = (props) => (
    <div>
        <Navbar />
        <section className="px-3">
            {props.children}
            <Footer/>
        </section>
    </div>
);

export default layout;