import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../const/routes';
import HamburgerMenu from 'react-hamburger-menu';
import { SideBar } from './SideBar';

interface NavigationAuthState {
    open: boolean;
}

class NavigationNonAuth extends React.Component<{}, NavigationAuthState> {
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
            <div className='nakul-top-left'>
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

                { this.state.open && <SideBar open={this.state.open} handleClick={this.handleClick} />}

            </div>
        );
    }
}

export default NavigationNonAuth;
