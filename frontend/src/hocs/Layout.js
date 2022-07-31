import React from 'react';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const layout = (props) => (
    <div>
        <Navbar />
        <section>
            {props.children}
            <Newsletter/>
        </section>
        <Footer/>
    </div>
);

export default layout;