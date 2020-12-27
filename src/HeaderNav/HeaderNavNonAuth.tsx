import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../const/routes';

const HeaderNavNonAuth = () => {

    return (
        <div className='nakul-header'>

            <div className='header-action'>

                <Link to={routes.HOME}>
                    <div className='nakul-black-button'>
                        <p>Home</p>
                    </div>
                </Link>


                <Link to={routes.PROJECT}>
                    <div className='nakul-black-button'>
                        <p>Projects</p>
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default HeaderNavNonAuth;