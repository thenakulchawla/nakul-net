import React from "react";
import { Experiences } from "./Experiences";
import { Projects } from "./Projects";
import { Publications } from "./Publications";
import { Skills } from "./Skills";

class ResumeMainComponent extends React.Component {
    constructor(props: any) {
        super(props);

    }

    render() {

        return (
            <div className="main-wrapper">
                <Experiences />
                <Projects />
                <Publications />
                <Skills />
            </div>
        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const ResumeMain = ResumeMainComponent;