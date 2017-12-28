import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from 'material-ui-icons/Work';
import EducationIcon from 'material-ui-icons/School';

class Experience extends Component {
      render() {
            return (
            <div>
            <h2 className="contentHeader">Experience</h2>
            <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - Present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<WorkIcon />}
            >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Heartland Payment Systems</h4>
            <h4 className="vertical-timeline-element-subtitle">Auburn, AL</h4>
            <p>
            Skills: C#, SQLServer, WCF, ASP.NET, Xamarin Forms
            </p>
            <p>
            Redeveloped the Bolletta Mobile application using Xamarin Forms.
            </p>
            <p>
            Created a framework to host recurring payments using a variety of scheduled types, including an open ended recurring payment and scheduler to create new instances on demand.
            </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2013 - 2017"
            iconStyle={{ background: 'rgb(30, 233, 99)', color: '#fff' }}
            icon = {<EducationIcon/>}
            >
            <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Tennessee at Martin</h4>
            <h4 className="vertical-timeline-element-subtitle">Martin, TN</h4>
            <p>
            Skills: C, C++, R, Python, on both Windows and Linux
            </p>
            <p>
            Graduated Summa Cum Laude
            </p>
            <p>
            Took courses on Data Mining, Artificial Intelligence, Software Development Life Cycles, and Robotics
            </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        );
    }
}

export default Experience;
