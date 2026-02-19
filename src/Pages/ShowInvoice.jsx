import './ShowInvoice.css'
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ShowInvoice = () => {

    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        contentRef: componentRef,
    });

    return (
        <>

            {/* -----------Full window print-------- */}
            {/* <button onClick={() => window.print()} className='btn btn-primary rounded-pill px-4 py-2 mt-4 me-3'>
                Print Table
            </button> */}
    
            <div ref={componentRef}>
                <div className='p-4 bg-white rounded shadow-sm mt-5'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='text-start'>
                            <h4>Invoice No #<span className='invoice-text'>I909112</span></h4>
                            <p>Date : <span className='invoice-text'>07/09/2022</span></p>
                        </div>
                        <div>
                            <h2 className='' style={{color:"rgba(0, 0, 0, 0.5)"}}>Logo</h2>
                        </div>
                        <div>
                            <ul className='list-unstyled invoice-text text-end'>
                                <li>1474 Avenue Kwame</li>
                                <li>NKRUMAH 10 BP 13395</li>
                                <li>10 Ouagadougou, Burkina Faso</li>
                                <li>finance@lizetransport.com</li>
                                <li>+1 (226) 50 272383</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <div className='text-start'>
                            <h4>Invoice To</h4>
                            <ul className='list-unstyled invoice-text'>
                                <li>John Doe</li>
                                <li>Lize Transport Organization</li>
                                <li>+1 (226) 50 272383</li>
                            </ul>
                        </div>
                        
                        <div>
                            <ul className='list-unstyled invoice-text text-end'>
                                <li>1474 Avenue Kwame</li>
                                <li>NKRUMAH 10 BP 13395</li>
                                <li>10 Ouagadougou, Burkina Faso</li>
                                <li>finance@lizetransport.com</li>
                                <li>+1 (226) 50 272383</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div style={{overflowX: 'auto'}}>
                            <table className="table table-borderless invoice-tables text-start">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Reservation</th>
                                        <th scope="col">Trip</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Falcon8X TBA/LTI</td>
                                        <td>Private jet</td>
                                        <td>R2390</td>
                                        <td>T2390</td>
                                        <td>11.500.000</td>
                                    </tr>
                                    <tr>
                                        <td>Champagne TC</td>
                                        <td>Added after reservation</td>
                                        <td>R2390</td>
                                        <td>T2390</td>
                                        <td>4.900.900</td>
                                    </tr>
                                    <tr>
                                        <td>Coca-Cola 20oz Can</td>
                                        <td>Added after reservation</td>
                                        <td>R2390</td>
                                        <td>T2390</td>
                                        <td>150.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />

                    <div className='row mt-4'>
                        <div className='col-md-9'></div>
                        <div className='col-md-3'>
                            <div className='d-flex justify-content-between mb-2'>
                                <span className='text-muted'>Subtotal :</span>
                                <span className='fw-bold'>18.550.000</span>
                            </div>
                            <div className='d-flex justify-content-between mb-2'>
                                <span className='text-muted'>TVA :</span>
                                <span className='fw-bold'>2.800.000</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col-md-9'></div>
                        <div className='col-md-3 d-flex justify-content-between'>
                            <span className='text-primary fw-bold'>Total :</span>
                            <span className='text-primary fw-bold'>19.350.000</span>
                        </div>
                    </div>
                    <hr/>
                    <h4 className='invoice-text'>Name Of Company</h4>
                </div>
            </div>
            <button onClick={handlePrint} className='btn btn-primary rounded-pill px-4 py-2 mt-4 mb-4'>
                Print Invoice
            </button>
        </>
    );
};

export default ShowInvoice;
