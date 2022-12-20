import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    
`

export const HeaderList = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    list-style: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;

    li {
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #f1f1f1;
            background-color: #333;
            padding: 0.5rem;
            border-radius: 5px;
        }
    }

`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: #333;

    &.active {
        color: #f1f1f1;
        background-color: #333;
        padding: 0.5rem;
        border-radius: 5px;
    }
`