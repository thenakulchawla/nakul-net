import React from "react";

class ResumeSideBarComponent extends React.Component {
    constructor(props: any) {
        super(props);

    }

    render() {

        return (
            <div className="sidebar-wrapper" >


                <div className="profile-container" >
                    <img className="profile-img" src={"android-chrome-192x192.png"} alt="profile picture" />
                    <h3 className="name">Nakul Chawla</h3>
                </div>

                <div className="contact-container container-block">
                    <ul className="list-unstyled contact-list">
                        <li className="email"><i className="fa fa-envelope"></i><a href="mailto: msg@nakul.net">msg@nakul.net</a></li>
                        <li className="linkedin"><i className="fa fa-linkedin"></i><a href="https://linkedin.com/in/thenakulchawl"
                            target="_blank">thenakulchawla</a></li>
                        <li className="github"><i className="fa fa-github"></i><a href="http://github.com/thenakulchawla"
                            target="_blank">thenakulchawla</a></li>
                        <li className="twitter"><i className="fa fa-twitter"></i><a href="https://twitter.com/thenakulchawla"
                            target="_blank">thenakulchawla</a></li>
                    </ul>
                </div>


                <div className="education-container container-block">

                    <h2 className="container-block-title">Education</h2>
                    <div className="item">
                        <h4 className="degree">MS Computer Science</h4>
                        <h5 className="meta">Arizona State University</h5>
                        <div className="time">2016 - 2018</div>
                    </div>
                    <div className="item">
                        <h4 className="degree">BE Information Science</h4>
                        <h5 className="meta">M.S. Ramiah Institute of Technology, Bangalore, India</h5>
                        <div className="time">2009 - 2013</div>
                    </div>
                </div>


                <div className="interests-container container-block">
                    <h2 className="container-block-title">Interests</h2>
                    <ul className="list-unstyled interests-list">
                        <li>Blockchain</li>
                        <li>Badminton</li>
                        <li>Distributed System</li>
                        <li>Cryptocurrency</li>


                    </ul>
                </div>



            </div >


        );
    }

}

export const ResumeSideBar = ResumeSideBarComponent;