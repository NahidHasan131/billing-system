import React from 'react';
import Avatar from '../assets/avatar.png'
import Navbar from '../Components/Navbar';
import InvoiceData from '../Components/InvoiceData';
import AddData from '../Components/AddData';

const Invoices = () => {
    return (
        <div>
            <InvoiceData></InvoiceData>
            <AddData></AddData>
        </div>
    );
};

export default Invoices;