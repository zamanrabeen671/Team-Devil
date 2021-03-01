import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
const Header = () => {
    return (
        <div className="container nav-section">
            <nav class="navbar navbar-expand-lg nav-bar">
                <a class="navbar-brand" href="#">TEAM-DEVIL</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav nav-container">
                        <li class="nav-item">
                            <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">NEWS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ACHIEVEMENT</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;