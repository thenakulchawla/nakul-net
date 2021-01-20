import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import { Facebook, LinkedIn, Mail, Twitter } from '@material-ui/icons';
import { Icon } from '@material-ui/core';
import { Footer } from '../Footer';


class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.navigateToGithub = this.navigateToGithub.bind(this);
        this.navigateToFacebook = this.navigateToFacebook.bind(this);
        this.navigateToTwitter = this.navigateToFacebook.bind(this);
        this.navigateToStackoverflow = this.navigateToFacebook.bind(this);
        this.navigateToLinkedin = this.navigateToLinkedin.bind(this);
        this.navigateToMail = this.navigateToMail.bind(this);
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

    navigateToStackoverflow() {
        this.openInNewTab("https://stackoverflow.com/users/4057016/thenakulchawla")
    }

    navigateToLinkedin() {
        this.openInNewTab("https://www.linkedin.com/in/thenakulchawla/")
    }

    navigateToTwitter() {
        this.openInNewTab("https://twitter.com/theNakulChawla")
    }

    navigateToMail() {
        this.openInNewTab("mailto:msg@nakul.net")
    }

    render() {
        return (
            <div className="centered display-inline-block">
                <div >
                    <img className="profile-image" src={"android-chrome-192x192.png"} alt={"profile picture"} />
                </div>
                <div>
                    <h2>Nakul Chawla</h2>
                </div>

                <div className="nakul-row icons-centered">
                    <div className="icon" onClick={this.navigateToLinkedin}>
                        <LinkedIn />
                    </div>
                    <div className="icon" onClick={this.navigateToGithub}>
                        <GitHubIcon />
                    </div>
                    <div className="icon" onClick={this.navigateToMail}>
                        <Mail />
                    </div>
                    <div className="icon" onClick={this.navigateToFacebook}>
                        <Facebook />
                    </div>
                    <div className="icon" onClick={this.navigateToTwitter}>
                        <Twitter />
                    </div>
                    <div className="icon" onClick={this.navigateToStackoverflow}>
                        <Icon className="fa fa-stack-overflow fa-lg" />
                    </div>
                </div>

                <Footer />


            </div >
        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const Home = HomeComponent;