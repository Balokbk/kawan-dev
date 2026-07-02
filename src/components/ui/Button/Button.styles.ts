import styled, { css } from "styled-components";

type Variant = {
    $variant: "primary" | "secondary";
};

export const Container = styled.a<Variant>`

    display:flex;
    align-items:center;
    justify-content:center;

    gap:8px;

    padding:14px 28px;

    border-radius:12px;

    font-weight:600;

    transition:.25s;

    cursor:pointer;

    ${({ theme, $variant }) =>

        $variant === "primary"

        ? css`

            background:${theme.colors.primary};
            color:white;

        `

        : css`

            background:transparent;
            border:1px solid ${theme.colors.border};
            color:${theme.colors.text};

        `
    }

    &:hover{
        transform:translateY(-3px);
    }

`;