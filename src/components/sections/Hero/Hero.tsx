import SocialButton from '@/components/ui/SocialButton';
import Container from '@/components/ui/Container';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section, Content, Left, Right, Name, Photo, Role, Description, Buttons } from './Hero.styles';
import { social } from '@/data/social';

export default function Hero() {
    return(
        <Section id='home'>
            <Container>
                <Content>
                        <Left>
                            <Name>Kawan Balonecker Knupp</Name>
                            <Role>Desenvolvedor FullStack</Role>
                            <Role>Com foco em Node.js, React e Next.js</Role>
                        <Description>
                            Desenvolvedor apaixonado por criar aplicações modernas, escaláveis e bem estruturadas utilizando tecnologias como React, Next.js, Node.js e TypeScript.
                        </Description>
                        <Buttons>
                            <SocialButton href={social.github} icon={<FaGithub />}>
                                GitHub
                            </SocialButton>
                            <SocialButton href={social.linkedin} icon={<FaLinkedin />}>
                                LinkedIn
                            </SocialButton>
                        </Buttons>
                    </Left>
                    <Right>
                        <Photo src="/images/profile.jpg" height="340" width="340" alt="Kawan Balonecker Knupp" />
                    </Right>
                </Content>
            </Container>
        </Section>
    )
}