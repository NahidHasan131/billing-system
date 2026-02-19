import React from 'react';
import Avatar from '../assets/avatar.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-white shadow-sm p-4 mb-4 rounded position-sticky top-0 w-100" style={{zIndex: 100}}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <form className="d-flex me-3">
                        <div className="input-group flex-nowrap border rounded d-flex align-items-center px-4 py-2 rounded-pill">
                            <span className=""><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input type="search" className="form-control nav-search ps-2" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                    </form>
                    <div className='SocialIcon d-flex justify-content-end align-items-center gap-3'>
                        <div className="position-relative">
                            <i className="fa-regular fa-comment-dots fs-3 mt-2"></i>
                            <span className="badge bg-danger rounded-circle position-absolute mt-2 top-0 end-0 translate-middle">3</span>
                        </div>
                        <div className="position-relative">
                            <i className="fa-regular fa-bell fs-3 mt-2"></i>
                            <span className="badge bg-warning rounded-circle position-absolute mt-2 top-0 end-0 translate-middle">5</span>
                        </div>
                        <div><img src={Avatar} style={{width:'40px'}} alt="Avatar" className="avatar-img me-1"/><i className="fa-solid fa-angle-down"></i></div>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;