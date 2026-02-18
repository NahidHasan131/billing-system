import React from 'react';
import './InvoiceData.css'

const InvoiceData = () => {
    return (
        <div className='pe-4'>
            <div className='d-flex justify-content-between align-items-center mb-4 invoice-title'>
                <div className='text-start'>
                    <h2 className='fs-3'>Invoices</h2>
                    <p className='fs-6'>Invoices</p>
                </div>
                <button className="btn invoice-btn rounded-pill px-4 py-2"><i className="fa-solid fa-circle-plus"></i> Add Invoice</button>
            </div>
            <div className='bg-white p-4 rounded shadow-sm'>
                <table className="table invoice-table">
                    <thead>
                        <tr>
                            <th scope="col">Invoice No.</th>
                            <th scope="col">Trip</th>
                            <th scope="col">Inv. Date</th>
                            <th scope="col">Inv. Amount</th>
                            <th scope="col">Bal. Due</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='unpaid rounded-pill'>Unpaid</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='paid rounded-pill'>Paid</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash "></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='canceled rounded-pill'>Canceled</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='unpaid rounded-pill'>Unpaid</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='paid rounded-pill'>Paid</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td>I909112</td>
                            <td>T901122</td>
                            <td>23/08/2022</td>
                            <td>13.500.000</td>
                            <td>4.500.000</td>
                            <td>ACH</td>
                            <td>01/31/2023</td>
                            <td><span className='canceled rounded-pill'>Canceled</span></td>
                            <td>
                                <button className='btn-edit'><i className="fa-regular fa-pen-to-square"></i></button>
                                <button className='btn-delete'><i className="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceData;