import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faHouse, faTags, faBoxesStacked, faTruckFast, faBasketShopping, faUsers, faHandHoldingDollar, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import './sidebar.css';

const Sidebar = () => {

    // Minimize or show sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Selected view
    const storedSelectedView = localStorage.getItem('selectedView');
    const [selectedView, setSelectedView] = useState(storedSelectedView || 'home');
    const handleSelectedView = (view) => {
        setSelectedView(view);
    };
    useEffect(() => {
        localStorage.setItem('selectedView', selectedView); // Guardar la opción seleccionada en el almacenamiento local
    }, [selectedView]);

    return (
        <nav className={`sidebar-container ${isSidebarOpen ? 'close' : ''}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src={logo} alt="" />
                    </span>
                    <div className="text logo-text">
                        <span className="name">hritikbike</span>
                        <span className="profession">Inventory</span>
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="toggle"
                    onClick={toggleSidebar}
                />
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className={`nav-link ${selectedView === "home" ? "selected" : ""}`}>
                            <Link to="/home" onClick={() => handleSelectedView("home")}>
                                <FontAwesomeIcon icon={faHouse} className="icon" />
                                <span className="text nav-text">Inicide</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "categories" ? "selected" : ""}`}>
                            <Link to="/categories" onClick={() => handleSelectedView("categories")}>
                                <FontAwesomeIcon icon={faTags} className="icon" />
                                <span className="text nav-text">Categories</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "items" ? "selected" : ""}`}>
                            <Link to="/items" onClick={() => handleSelectedView("items")}>
                                <FontAwesomeIcon icon={faBoxesStacked} className="icon" />
                                <span className="text nav-text">articles</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "providers" ? "selected" : ""}`}>
                            <Link to="/providers" onClick={() => handleSelectedView("providers")}>
                                <FontAwesomeIcon icon={faTruckFast} className="icon" />
                                <span className="text nav-text">Suppliers</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "purchases" ? "selected" : ""}`}>
                            <Link to="/purchases" onClick={() => handleSelectedView("purchases")}>
                                <FontAwesomeIcon icon={faBasketShopping} className="icon" />
                                <span className="text nav-text">Shopping</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "customers" ? "selected" : ""}`}>
                            <Link to="/customers" onClick={() => handleSelectedView("customers")}>
                                <FontAwesomeIcon icon={faUsers} className="icon" />
                                <span className="text nav-text">clients</span>
                            </Link>
                        </li>
                        <li className={`nav-link ${selectedView === "sales" ? "selected" : ""}`}>
                            <Link to="/sales" onClick={() => handleSelectedView("sales")}>
                                <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
                                <span className="text nav-text">sales</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Only if the user is admin */}
                <div className="bottom-content">
                    <ul>
                        <li className={`${selectedView === "users" ? "selected" : ""}`}>
                            <Link to="/users" onClick={() => handleSelectedView("users")}>
                                <FontAwesomeIcon icon={faUsersGear} className="icon" />
                                <span className="text nav-text">users</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
