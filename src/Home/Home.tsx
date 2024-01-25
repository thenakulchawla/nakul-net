import React from 'react'
import { LinkedIn, Mail, Twitter, GitHub } from '@mui/icons-material';
import { Footer } from '../Footer';
import { Icon } from '@mui/material';


class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
        this.navigateToGithub = this.navigateToGithub.bind(this);
        this.navigateToTwitter = this.navigateToTwitter.bind(this);
        this.navigateToStackoverflow = this.navigateToStackoverflow.bind(this);
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
        this.openInNewTab("mailto:thenakulchawla@gmail.com")
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
                        <GitHub />
                    </div>
                    <div className="icon" onClick={this.navigateToMail}>
                        <Mail />
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