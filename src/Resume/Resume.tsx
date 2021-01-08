import React from 'react'
import { ResumeMain } from './ResumeMain';
import { ResumeSideBar } from './ResumeSideBar';

class ResumeComponent extends React.Component {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (


            <div className="resume-wrapper">
                <ResumeSideBar />
                <ResumeMain />

            </div>


        )
    }
}

// const authCondition = (authUser: any) => !!authUser;

export const Resume = ResumeComponent;