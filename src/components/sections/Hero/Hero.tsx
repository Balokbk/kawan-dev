import SocialButton from '@/components/ui/SocialButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Content, Left, Right, Name, Photo, Role, Description, Buttons } from './Hero.styles';

export default function Hero() {
    return(
        <Container id='home'>
            <Content>
                <Left>
                    <Name>Kawan Balonecker Knupp</Name>
                    <Role>Desenvolvedor FullStack</Role>
                    <Role>Com foco em Node.js, React e Next.js</Role>
                    <Description>
                        Desenvolvedor apaixonado por criar aplicações modernas, escaláveis e bem estruturadas utilizando tecnologias como React, Next.js, Node.js e TypeScript.
                    </Description>
                    <Buttons>
                        <SocialButton href='https://github.com' icon={<FaGithub />}>
                            GitHub
                        </SocialButton>
                        <SocialButton href='https://linkedin.com' icon={<FaLinkedin />}>
                            LinkedIn
                        </SocialButton>
                    </Buttons>
                </Left>
                <Right>
                    <Photo src="/images/profile.jpg" height="200" width="200" alt="Kawan Balonecker Knupp" />
                </Right>
            </Content>
        </Container>
    )
}