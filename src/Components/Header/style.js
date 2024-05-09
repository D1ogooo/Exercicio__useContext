import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const HeaderStyle = styled.header`
 background-color: #c2a53c;
 height: 48px ;

 ul {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  align-items: center;

  li {
   list-style: none;
  }
 }
`

export const A = styled(Link)`
 text-decoration: none;
 font-family: 'Esteban';
 color: #fff;
`

export const Button = styled.button`
 cursor: pointer;
 
 background: none;
 width: 28px;
 height: 35px;
 border-radius: 2px;
 border: solid 1px #000;

 img {
  background: none;
 }
`