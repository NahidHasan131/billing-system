import React, {useState} from 'react';
import InvoiceData from '../Components/InvoiceData';
import AddData from '../Components/AddData';
import ShowInvoice from '../Components/ShowInvoice';

const Invoices = () => {
    const [showAddInvoice, setShowAddInvoice] = useState(false);
    const [showInvoice, setShowInvoice] = useState(false);

    return (
        <div>
            {!showAddInvoice ? (
                <InvoiceData setShowAddInvoice={setShowAddInvoice} ></InvoiceData>) : 
                ( <AddData setShowAddInvoice={setShowAddInvoice} ></AddData> )
            }

            {showInvoice ? (
                 <ShowInvoice setShowInvoice={setShowInvoice}></ShowInvoice>):null
            }
            
        </div>
    );
};

export default Invoices;