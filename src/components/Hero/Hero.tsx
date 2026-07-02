import { Container, Content, Name, Photo, Role, Description, Buttons } from './Hero.styles';

export default function Hero() {
    return(
        <Container id='home'>
            <Content>
                <Name>Kawan Balonecker Knupp</Name>
                <Photo src="/images/profile.jpg" height="200" width="200" alt="Kawan Balonecker Knupp" />
                <Role>Desenvolvedor FullStack</Role>
                <Role>Com foco em Node.js, React e Next.js</Role>
                <Description>
                    Desenvolvedor apaixonado por criar aplicações modernas, escaláveis e bem estruturadas utilizando tecnologias como React, Next.js, Node.js e TypeScript.
                </Description>
                <Buttons>
                    {/* Os botoes ainda virao aqui */}
                </Buttons>
            </Content>
        </Container>
    )
}