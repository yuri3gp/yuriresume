import styled from 'styled-components';

export const UlStyle = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
export const LiStyle = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover{
    background-color: #0696ea87;
  }
`
export const AStyle = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
`