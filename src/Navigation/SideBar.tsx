import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as routes from '../const/routes';
import { Link } from 'react-router-dom';
// import { withAuthorization } from '../firebase/withAuthorization';

interface SideBarProps {
    open: boolean;
    handleClick: any;
}


class SideBarComponent extends React.Component<SideBarProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div style={{ display: this.props.open ? 'block' : 'none' }}>
                <div className="sidebar">
                    <List disablePadding dense>
                        <div className="sidebar-item">
                            <ListItem key='home' button>
                                <div className="sidebar-item-content">
                                    <Link to={routes.HOME} style={{ textDecoration: 'none' }}>
                                        <div onClick={this.props.handleClick} className="sidebar-item-text">Home</div>
                                    </Link>
                                </div>
                            </ListItem>
                        </div>
                        <div className="sidebar-item">
                            <ListItem key='resume' button>
                                <div className="sidebar-item-content">
                                    <Link to={routes.RESUME} style={{ textDecoration: 'none' }}>
                                        <div onClick={this.props.handleClick} className="sidebar-item-text">
                                            Resume
                                </div>
                                    </Link>
                                </div>
                            </ListItem>
                        </div>

                    </List>
                </div>
            </div>
        );
    }

}

// const authCondition = (authUser: any) => !!authUser;

// export const SideBar = withAuthorization(authCondition)(SideBarComponent);
export const SideBar = SideBarComponent;
