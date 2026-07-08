import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    background-color: ${({theme}) => theme.colors.surface};

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.5rem 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.a`
    font-size: 1.5rem;
    font-weight: bold;
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled.a`
    position: relative;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    transition: .25s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;