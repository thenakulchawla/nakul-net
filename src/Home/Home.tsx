import React from 'react'


class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="nakul-body">
                    <img className="profile-image" src={"android-chrome-192x192.png"} alt={""} />
                </div>
            </div>
        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const Home = HomeComponent;