import Image from "next/image";
import styled from "styled-components";
import device from '@/style/breakpoints'

export const Section = styled.section`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 8rem;

    @media ${device.mobile}{
        padding: 0 1rem;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: grid;

    grid-template-columns: 1fr 400px;

    gap: 100px;

    align-items: center;

    @media ${device.mobile}{
        display: flex;
        max-width: 480px;
        background-color: black;
        gap: 0;

    }
`;

export const Left = styled.div`

`

export const Right = styled.div`
    display: flex;
    justify-content: center;
`

export const Name = styled.h1`
    font-size: 3.2rem;
    margin: 15px 0;

    @media ${device.mobile}{
        font-size: 1.5rem;
    }
`;

export const Role = styled.h2`
    margin-top: 5px;
    font-size: 2rem;
`

export const Photo = styled(Image)`
    border-radius: 50%;
    object-fit: cover;
`;

export const Description = styled.p`
    max-width: 650px;
    margin-top: 20px;
    line-height: 1.4;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 40px;
`;

export const ScrollIndicator = styled.a`

    position:absolute;

    bottom:2rem;

    left:50%;

    color:${({theme}) => theme.colors.primary};

    transition:.25s;

    svg{

        font-size:2.5rem;

    }

    &:hover{

        transform:translateY(-4px);
        color:${({theme}) => theme.colors.secondary};

    }

`;