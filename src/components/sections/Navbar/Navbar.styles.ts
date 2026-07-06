import styled from "styled-components";

export const Header = styled.header`
    position: fixed;

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
    
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;
`;

export const NavLink = styled.a`
    position: relative;

    transition: .25s;

    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    }
`;