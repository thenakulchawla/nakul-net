import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Facebook } from '@material-ui/icons';



class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.navigateToGithub = this.navigateToGithub.bind(this);
        this.navigateToFacebook = this.navigateToFacebook.bind(this);
        this.openInNewTab = this.openInNewTab.bind(this);
    }

    openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    navigateToGithub() {
        this.openInNewTab("https://github.com/thenakulchawla/")
    }

    navigateToFacebook() {
        this.openInNewTab("https://www.facebook.com/thenakulchawla")
    }



    render() {
        return (
            <div className="centered">
                <div >
                    <img className="profile-image" src={"android-chrome-192x192.png"} alt={""} />
                </div>
                <div className="nakul-row icons">
                    <div className="icon" onClick={this.navigateToGithub}>
                        <GitHubIcon />
                    </div>
                    <div className="icon" onClick={this.navigateToFacebook}>
                        <Facebook />
                    </div>
                </div>
            </div>
        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const Home = HomeComponent;