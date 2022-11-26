import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
margin: 0 auto;
padding: 0;
`;

export const Header = styled.header`
padding: 15px;
box-shadow: 0px 5px 5px -5px rgba(44, 138, 210, 0.6);
`;

export const Link = styled(NavLink)`
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
color: black;
font-weight: 500;
background-color: none;

&.active {
    color: white;
    background-color: pink;
}
`