import {useState} from 'react';
import InvoiceData from '../Components/InvoiceData';
import AddData from '../Components/AddData';
import ShowInvoice from './ShowInvoice';

const Invoices = () => {
    const [showAddInvoice, setShowAddInvoice] = useState(false);
    const [showInvoicePage, setShowInvoicePage] = useState(false);

    return (
        <div>
            {showInvoicePage ? (
                <ShowInvoice setShowInvoicePage={setShowInvoicePage}></ShowInvoice>
            ) : !showAddInvoice ? (
                <InvoiceData setShowAddInvoice={setShowAddInvoice}></InvoiceData>
            ) : (
                <AddData setShowAddInvoice={setShowAddInvoice} setShowInvoicePage={setShowInvoicePage}></AddData>
            )}
        </div>
    );
};

export default Invoices;