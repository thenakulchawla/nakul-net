import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as routes from '../const/routes';
import { Link } from 'react-router-dom';
// import { withAuthorization } from '../firebase/withAuthorization';

const SideBarComponent = () => {

    return (
        <div className="sidebar">

            <List disablePadding dense>
                <div className="sidebar-item">
                    <ListItem key='home' button>
                        <div className="sidebar-item-content">
                            <Link to={routes.HOME} style={{ textDecoration: 'none' }}>
                                <div className="sidebar-item-text">Home</div>
                            </Link>
                        </div>
                    </ListItem>
                </div>
                <div className="sidebar-item">
                    <ListItem key='resume' button>
                        <div className="sidebar-item-content">
                            <Link to={routes.RESUME} style={{ textDecoration: 'none' }}>
                                <div className="sidebar-item-text">
                                    Resume
                                </div>
                            </Link>
                        </div>
                    </ListItem>
                </div>

            </List>
        </div>
    );

}

// const authCondition = (authUser: any) => !!authUser;

// export const SideBar = withAuthorization(authCondition)(SideBarComponent);
export const SideBar = SideBarComponent;
