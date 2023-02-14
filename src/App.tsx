import Personal from './components/Personal'
import Experience from './components/Experience'
import Languages from './components/Languages'
import { personal, experience, languages } from './database/resume'

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
