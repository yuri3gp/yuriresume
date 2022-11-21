import React from "react"
import { Outlet, Link } from "react-router-dom"
import { HeaderStyle, UlStyle, LiStyle,LinkStyle } from './styles'
import {data} from '../../database/data'

export default function Header() {
    return (
        <>
            <HeaderStyle>
                <UlStyle background={`#333`}>
                    {data.map((item,index,array)=>( 
                        <LiStyle key={index}>
                              <LinkStyle><Link className="linkClass" to={`/${item}`}>{item}</Link></LinkStyle>  
                        </LiStyle>
                    ))}
                </UlStyle>
            </HeaderStyle>
            <Outlet />
        </>
    )
}