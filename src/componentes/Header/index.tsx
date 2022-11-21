import {UlStyle,LiStyle, HeaderStyled} from './styles';
import dataMenu from '../../database/dataMenu.json';
import { Outlet, Link } from "react-router-dom";

export default function Header()
{
    return(
        <>
            <HeaderStyled>
                <UlStyle>
                    {dataMenu.map((item,index)=>(
                    <Link className="linkRoute" to={`/${item}`}>
                        <LiStyle>{item}</LiStyle>
                    </Link>
                    ))}
                </UlStyle>
            </HeaderStyled>
            <Outlet />
        </>
    )
}