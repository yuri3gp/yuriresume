import React from 'react'

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

export default Education;