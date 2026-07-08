import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Name = styled.h2`
    font-size: 1rem;
`;