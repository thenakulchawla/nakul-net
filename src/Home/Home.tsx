import React from 'react'


class HomeComponent extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="nakul-body">
                <p> Hello World</p>

            </div>
        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const Home = HomeComponent;