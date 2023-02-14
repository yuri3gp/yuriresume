
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

export default Skills