import styled from 'styled-components';

export const Section = styled.section`
    padding: 9rem 0;
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 4rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subtitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const Skill = styled.span`
    padding: .8rem 1.2rem;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    transition: .2s;

    &:hover{
        transform: translateY(-2px);
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const EducationCard = styled.div`
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin-bottom: 2rem;
`;

export const EducationTitle = styled.h4`
    font-size: 1.3rem;
`;

export const EducationDescription = styled.p`
    margin-top: .5rem;
`;