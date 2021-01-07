import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../const/routes';

const HeaderNavNonAuth = () => {

    return (
        <div className='nakul-header'>
            {/* <Link to={routes.HOME}>
                <div className='nakul-logo'>
                    <img src="favicon-32x32.png" alt={''} />
                </div>
            </Link> */}
            <div>

            </div>

            <div className='header-action'>

                <Link to={routes.HOME} style={{ textDecoration: 'none' }}>
                    <div className="header-item-text">
                        <p>Home</p>
                    </div>
                </Link>


                <Link to={routes.PROJECT} style={{ textDecoration: 'none' }}>
                    <div className="header-item-text">
                        <p>Projects</p>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default HeaderNavNonAuth;