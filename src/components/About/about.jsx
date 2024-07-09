import React from 'react'
import './about.css'
import { MdWork as WorkIcon} from "react-icons/md";
import timelineElements from "../../data/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <div className='about'>
      <div className="education">
        <div className="education-title">
          <h1>Education</h1>
        </div>
        <div className="education-content">
          <h5>Bachelor in Computer Science Engineering</h5>
          <p>University of Texas at Arlington</p>
          <small>Expected Graduation Date: Dec 2025</small>
        </div>
          

      </div>
      <div className="experience">
        <div className="experience-title">
          <h1>Experience</h1>
        </div>
        <VerticalTimeline>
          {
            timelineElements.map((element) => {
              return (
                <VerticalTimelineElement
                  key={element.key}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={{ background: '#fff', color: '#000' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">{element.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                  <p id="description">{element.description}</p>

                </VerticalTimelineElement>
              )
            })
          }
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default About