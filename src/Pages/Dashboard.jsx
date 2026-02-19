import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
    return (
        <div>
            <div className='text-start'>
                <h2 className='fs-3 mb-4'>Dashboard</h2>
                <div className='row g-4'>
                    <div className='col-md-3'>
                        <div className='bg-white p-4 rounded shadow-sm'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='text-muted mb-1'>Total Invoices</p>
                                    <h3 className='mb-0'>156</h3>
                                </div>
                                <div className='fs-2 text-primary'>
                                    <i className="fa-solid fa-file-invoice"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='bg-white p-4 rounded shadow-sm'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='text-muted mb-1'>Paid</p>
                                    <h3 className='mb-0'>98</h3>
                                </div>
                                <div className='fs-2 text-success'>
                                    <i className="fa-solid fa-circle-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='bg-white p-4 rounded shadow-sm'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='text-muted mb-1'>Unpaid</p>
                                    <h3 className='mb-0'>42</h3>
                                </div>
                                <div className='fs-2 text-danger'>
                                    <i className="fa-solid fa-circle-exclamation"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='bg-white p-4 rounded shadow-sm'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='text-muted mb-1'>Canceled</p>
                                    <h3 className='mb-0'>16</h3>
                                </div>
                                <div className='fs-2 text-secondary'>
                                    <i className="fa-solid fa-circle-xmark"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 bg-white p-4 rounded shadow-sm'>
                    <h4 className='mb-3'>Welcome to Billing System</h4>
                    <p className='text-muted'>Manage your invoices, trips, and billing information efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
