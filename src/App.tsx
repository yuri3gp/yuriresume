import React from 'react'
import { personal, skills, experience, education, languages } from './database/resume'


const Personal = (props: any) => {
    return (
        <>
            <span>{props.name}</span>
            <span>{props.goal}</span>
            <hr />
        </>
    )
}

const Skills = (props:any) => {
    return (
        <>
            <span>Skills</span>
            <hr />
            <ul>
                {props.skills.map((value: any) => (
                    <li>{value}</li>
                ))}
            </ul>
            <hr />
        </>
    )
}

const Experience = (props:any) =>{
    return(
        <>
            <span>Work history</span>
            <hr/>
            {props.experience.map((value: any,key:any) => (
                <React.Fragment key={key}>
                    <span>{`${value.start} to ${value.end}: ${value.office} ${value.company},${value.location}`}</span>
                    <br/>
                </React.Fragment>
            ))}
        </>
    )
}

const Education = (props:any) =>{
    return(
        <>
            <span>Education</span>
            <hr/>
            {props.experience.map((value: any,key:any) => (
                <React.Fragment key={key}>
                    <span>{`${value.start} to ${value.end}: ${value.course} ${value.institution},${value.location}`}</span>
                    <br/>
                </React.Fragment>
            ))}
        </>
    )
}

const Languages = (props:any) => {
    return (
        <>
            <span>Languages</span>
            <hr />
            <ul>
                {props.languages.map((value:any,key:any) => (
                    <li key={key}>
                        <span>{value.name}</span>
                        <span>{value.level}</span>
                    </li>
                ))}
            </ul>
            <hr />
        </>
    )
}



export default function App() {
    return (
        <>
            <Personal name={personal.name} goal={personal.goal} />
            {/* <Skills skills={skills}/> */}
            <Experience experience={experience}/>
            {/* <Education education={education}/> */}
            <Languages languages={languages}/>
        </>
    )
}
