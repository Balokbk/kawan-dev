import Container from '@/components/ui/Container';
import SocialButton from '@/components/ui/SocialButton';
import { FooterContainer, Content, Name } from './Footer.style';
import { FaGithub } from 'react-icons/fa'

export default function Footer(){
    return(
        <FooterContainer>
            <Container>
                <Content>
                    <Name>Kawan Balonecker Knupp · 2026</Name>
                    <SocialButton href='https://github.com/Balokbk/kawan-dev' icon={<FaGithub/>}>Repositório</SocialButton>
                </Content>
            </Container>
        </FooterContainer>
    )
}