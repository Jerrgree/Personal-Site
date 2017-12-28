import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Experience extends Component {
      render() {
            return (
                <div className="content">
                <h2>Experience</h2>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 classnMae="vertical-timeline-element-subtitle">Heartland Payment Systems</h4>
                <h4 className="vertical-timeline-element-subtitle">Auburn, AL</h4>
                <p>
                .net C#, WCF, ASP.NET, Xamarin Forms
                </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2013 - 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Tennessee at Martin</h4>
                <h4 className="vertical-timeline-element-subtitle">Martin, TN</h4>
                <p>
                C++, Windows, Linux, Algorithms and Automata Theory, Artifical Intelligence, Software Development Lifecycles
                </p>
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        );
    }
}

export default Experience;
