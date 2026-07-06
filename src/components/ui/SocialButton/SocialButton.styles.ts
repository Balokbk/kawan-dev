import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 22px;

    border-radius: 12px;

    color: ${({ theme }) => theme.colors.text};

    transition: .25s;

    &:hover {
        transform: translateY(-3px);
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;

    font-size: 1.3rem;
`;

export const Label = styled.span`
    font-weight: 600;
`;