import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../const/routes';
import HamburgerMenu from 'react-hamburger-menu';

interface HeaderNavNonAuthState {
    open: boolean;
}

class HeaderNavNonAuth extends React.Component<{}, HeaderNavNonAuthState> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            open: false
        }

    }


    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {

        return (
            <div className='nakul-header'>
                <div className="nakul-logo">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />

                </div>

                <div className='header-action'>

                    <Link to={routes.HOME} style={{ textDecoration: 'none' }}>
                        <div className="header-item-text">
                            <p>Home</p>
                        </div>
                    </Link>

                    <Link to={routes.RESUME} style={{ textDecoration: 'none' }}>
                        <div className="header-item-text">
                            <p>Resume</p>
                        </div>
                    </Link>

                </div>
            </div>
        );
    }
}

export default HeaderNavNonAuth;
