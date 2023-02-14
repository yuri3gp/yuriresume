import React from 'react'

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

export default Experience