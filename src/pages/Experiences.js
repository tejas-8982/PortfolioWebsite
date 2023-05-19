import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } 
from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
function Experiences() {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2017-2018'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<SchoolIcon/>}
      >
      <h3>Indore Public School, Indore</h3>
      <p>Class 10th</p>
      <p>Percentage - 73%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2019-2020'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<SchoolIcon/>}
      >
      <h3>Marthoma Academy, Indore</h3>
      <p>Class 12th</p>
      <p>Percentage - 82.20%</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2020-2024'
      iconStyle={{background:"#3e497a",color:"#fff"}}
      icon={<SchoolIcon/>}
      >
      <h3>SGSITS, Indore</h3>
      <p>Bachelor of Technology</p>
      <p>Infromation Technology Engineering</p>
      <p>CGPA - 7.2</p>
      </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experiences
