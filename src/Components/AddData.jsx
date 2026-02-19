import './AddData.css'

const AddData = ({setShowAddInvoice, setShowInvoice}) => {
 
    return (
        <div className='text-start'>
            <div className='d-flex justify-content-between align-items-center mb-4 invoice-title'>
                <div className='text-start'>
                    <h2 className='fs-3'>Invoices</h2>
                    <p className='fs-6'>Invoices / New Invoice</p>
                </div>
            </div>
            <div className='bg-white p-4 rounded shadow-sm mb-4'>
                <form>
                    <div className='row mb-4'>
                        <div className="col-md-6">
                            <h4>Select</h4>
                            <select name="client" className="form-select px-4 py-2 rounded-pill">
                                <option value="">Select Client</option>
                                <option value="client1">Client 1</option>
                                <option value="client2">Client 2</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <h4>Invoice Date</h4>
                            <input type="date" className="form-control px-4 py-2 rounded-pill"/>
                        </div>
                        <label className="col-md-3">
                            <h4>Plane Image</h4>
                            <div className="upload-box border border-dashed rounded p-3 text-center ">
                                <i className="fa-solid fa-cloud-arrow-up fs-4 text-primary"></i>
                                <p className="mb-0 mt-2 text-primary">Upload<br/>Plane Image</p>
                                <input type="file" className="" hidden/>

                            </div>
                        </label>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-4">
                            <h4>Trip</h4>
                            <select name="trip" className="form-select px-4 py-2 rounded-pill">
                                <option value="">12380</option>
                                <option value="T2930">T2930</option>
                                <option value="T2940">T2940</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            <div className='bg-white p-4 rounded shadow-sm mb-4'>
                <div className='table-responsive'>
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th>Products Type :</th>
                                <th>Products :</th>
                                <th>Description</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select className="form-select">
                                        <option value="">Select Type</option>
                                        <option value="Plane">Plane</option>
                                        <option value="Helicopter">Helicopter</option>
                                        <option value="Drinks">Drinks</option>
                                        <option value="Flowers">Flowers</option>
                                        <option value="Private Jet">Private Jet</option>
                                        <option value="Airbus">Airbus</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-select">
                                        <option value="">Select Product</option>
                                        <option value="Falcon885X TBA/LTI">Falcon885X TBA/LTI</option>
                                        <option value="Falcon8X TBA/LTI">Falcon8X TBA/LTI</option>
                                        <option value="Falcon998X TBA/LTI">Falcon998X TBA/LTI</option>
                                        <option value="Falcon1428X TBA/LTI">Falcon1428X TBA/LTI</option>
                                        <option value="Falcon6558X TBA/LTI">Falcon6558X TBA/LTI</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" className="form-control"  placeholder="Product description"/>
                                </td>
                                <td>
                                    <input type="text" className="form-control"  placeholder="0"/>
                                </td>
                                <td>
                                    <button type="button" className='btn-delete-product'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" className='btn btn-link text-primary p-0 text-decoration-none'>
                    <i className="fa-solid fa-plus"></i> Add Product
                </button>

                <div className='row mt-4'>
                    <div className='col-md-8'></div>
                    <div className='col-md-4'>
                        <div className='d-flex justify-content-between mb-2'>
                            <span className='text-muted'>Subtotal :</span>
                            <span className='fw-bold'>18.550.000</span>
                        </div>
                        <div className='d-flex justify-content-between mb-2'>
                            <span className='text-muted'>TVA :</span>
                            <span className='fw-bold'>2.800.000</span>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <span className='text-primary fw-bold'>Total :</span>
                            <span className='text-primary fw-bold'>19.350.000</span>
                        </div>
                    </div>
                </div>

                <div className='d-flex gap-3 mt-4'>
                    <button type="button" className='btn btn-primary rounded-pill px-4 py-2'>Save</button>
                    <button type="button" onClick={() => setShowAddInvoice(false)} className='btn btn-outline-secondary rounded-pill px-4 py-2'>Cancel</button>
                    <button type="button" onClick={() => setShowInvoice(true)} className='btn btn-primary rounded-pill px-4 py-2'>Download Invoice</button>
                </div>
            </div>
        </div>
    );
};

export default AddData;
