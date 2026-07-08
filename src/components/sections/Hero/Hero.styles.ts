import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 8rem;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: grid;

    grid-template-columns: 1fr 400px;

    gap: 100px;

    align-items: center;
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