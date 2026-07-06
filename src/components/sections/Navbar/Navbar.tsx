'use client';

import { Header, Wrapper, Logo, Nav, NavLink } from './Navbar.styles';

const NavItens = [
    { label: 'Sobre', href: '#about' },
    { label: 'Tecnologias', href: '#technologies' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Formação', href: '#education' },
    { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
    return(
        <Header>
            <Wrapper>
                <Logo href='#home'>Kawan Dev<span>.</span></Logo>

                <Nav>
                    {NavItens.map((item, index) => (
                        <NavLink key={index} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}
                </Nav>
            </Wrapper>
        </Header>
    )
}