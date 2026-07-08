import styled from 'styled-components';

export const Section = styled.section`
    padding: 5rem 0;
    text-align: center;
`;

export const Title = styled.h2`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

export const Description = styled.p`
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
    margin-bottom: 2.8rem;
`;

export const Email = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary}

    svg{
        font-size: 1.5rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
`;