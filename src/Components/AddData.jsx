import React from 'react';
import './InvoiceData.css'

const AddData = () => {
    return (
        <div className='pe-4 text-start'>
            <div className='d-flex justify-content-between align-items-center mb-4 invoice-title'>
                <div className='text-start'>
                    <h2 className='fs-3'>Invoices</h2>
                    <p className='fs-6'>Invoices / New Invoice</p>
                </div>
            </div>
            <div className='bg-white p-4 rounded shadow-sm mb-6'>
                <form className="container">
                    <div className='row mb-4'>
                        <div className="col-md-6 ">
                            <h4>Select</h4>
                            <select name="invoiceType" id="invoiceType" className="form-select px-4 py-2 rounded-pill">
                                <option value="">Select Invoice Type</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                            </select>
                        </div>
                        <div className='d-flex col-md-6 justify-content-between gap-3'>
                            <div className="col-md-6">
                                <h4>Invoice Date</h4>
                                <input type="date" className="form-select px-4 py-2 rounded-pill"/>
                            </div>
                            <div className="col-md-6">
                                <h4>Plane Image</h4>
                                <div className="border border-dashed rounded p-3"><input type="file" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>Trip</h4>
                        <select name="invoiceType" id="invoiceType" className="form-select px-4 py-2 rounded-pill">
                            <option value="">Select Invoice Type</option>
                            <option value="type1">T2930</option>
                            <option value="type2">T2940</option>
                            <option value="type2">T2940</option>
                            <option value="type2">T2940</option>
                            <option value="type2">T2940</option>
                            <option value="type2">T2940</option>
                        </select>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default AddData;