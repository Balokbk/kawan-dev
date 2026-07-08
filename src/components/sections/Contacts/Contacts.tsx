import Container from '@/components/ui/Container'
import SocialButton from '@/components/ui/SocialButton'
import { Section, Title, Description, Buttons, Email } from './Contacts.styles'
import { social } from '@/data/social'
import { FaEnvelope, FaFileDownload, FaLinkedin } from 'react-icons/fa'

export default function Contacts(){
    return(
        <Section id='contact'>
            <Container>
                <Title>Contato</Title>
                <Description>Estou aberto a novas oportunidades, projetos e desafios. Caso tenha interesse no meu trabalho, entre em contato por um dos canais abaixo e/ou baixe o meu currículo.</Description>
                <Email>
                    <FaEnvelope />
                    {social.email}
                </Email>
                <Buttons>
                    <SocialButton href={social.linkedin} icon={<FaLinkedin/>}>LinkedIn</SocialButton>
                    <SocialButton href={social.resume} icon={<FaFileDownload/>}>Currículo</SocialButton>
                </Buttons>
            </Container>
        </Section>
    )
}