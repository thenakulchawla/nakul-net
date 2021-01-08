import React from "react";

class SkillsComponent extends React.Component {
    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <section className="skills-section section">

                <h2 className="section-title"><i className="fa fa-rocket"></i>Skills &amp; Proficiency</h2>

                <div className="skillset">
                    <div className="item">
                        <h3 className="level-title">C++, C</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner-80"></div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Python</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner-70" ></div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Typescript, Javascript, React, Angular</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner-70" > </div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Git, SQL</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner-85"></div>
                        </div>
                    </div>

                    <div className="item">
                        <h3 className="level-title">Docker, MongoDB</h3>
                        <div className="level-bar">
                            <div className="level-bar-inner-80" ></div>
                        </div>
                    </div>

                </div>
            </section >
        )
    }
}

export const Skills = SkillsComponent;