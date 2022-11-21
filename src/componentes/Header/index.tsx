import {UlStyle,LiStyle} from './styles';
import dataMenu from '../../database/dataMenu.json';
import { Outlet, Link } from "react-router-dom";

export default function Header()
{
    return(
        <>
            <UlStyle>
                {dataMenu.map((item,index)=>(
                    
                <Link className="linkRoute" to={`/${item}`}>
                    <LiStyle key={index}>{item}</LiStyle>
                </Link>
                    
                ))}
            </UlStyle>
            <Outlet />
        </>
    )
}