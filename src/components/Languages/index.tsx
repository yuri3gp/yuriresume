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

export default Languages