import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sideBar p-4'>
            <h2 className='pb-4'>Logo</h2>
            <ul className='list-unstyled text-start ps-3'>
                <li><i className="fa-regular fa-house"></i> Dashboard</li>
                <li><i className="fa-solid fa-phone-volume"></i> Reservations</li>
                <li className='d-flex justify-content-between'><span><i className="fa-solid fa-suitcase-rolling"></i> Trips</span> <span><i className="fa-solid fa-angle-down"></i></span></li>
                <li><Link to='/invoice' style={{color: "rgba(255, 255, 255, 0.5)"}} className='text-decoration-none invoice-sidebar'><i className="fa-solid fa-file-invoice"></i> Invoices</Link></li>
                <li className='d-flex justify-content-between'><span><i className="fa-solid fa-plane-up"></i> Planes</span> <span><i className="fa-solid fa-angle-down"></i></span></li>
                <li className='d-flex justify-content-between'><span><i className="fa-solid fa-wine-glass"></i> Amenities</span> <span><i className="fa-solid fa-angle-down"></i></span></li>
                <li><i className="fa-solid fa-arrows-down-to-people"></i> Contacts</li>
                <li><i className="fa-solid fa-users"></i> Team</li>
                <li><i className="fa-solid fa-people-group"></i> Crew Members</li>
                <li><i className="fa-solid fa-folder-closed"></i> Files</li>
                <li><i className="fa-solid fa-comment-dots"></i> Messages</li>
                <li><i className="fa-solid fa-calendar-days"></i> Calendar</li>
                <li><i className="fa-solid fa-gear"></i> Setting</li>
            </ul>
            <div className='text-start ps-3 pt-4'><button className='btn text-white p-0 no-outline'><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button></div>
        </div>
    );
};

export default Sidebar;