import styled from "styled-components";

export const Section = styled.section`
    padding: 8rem 0;
`;

export const Title = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
`;

export const Card = styled.article<{ $reverse: boolean}>`
    display: flex;
    flex-direction: ${({ $reverse }) => $reverse ? 'row-reverse' : 'row'};
    align-items: center;

    @media (max-width: 900px){
        flex-direction: column;
    }
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ProjectTitle = styled.h3`
    font-size: 2rem;
`;

export const Description = styled.p`
    line-height: 2.2;
`;

export const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
`;

export const Technology = styled.span`
    padding: .8rem 1.2rem;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: .2s;

    &:hover{
        transform: translateY(-2px);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: .3rem;
    flex-wrap: wrap;
`;