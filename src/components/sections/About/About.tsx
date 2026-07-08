import Container from '@/components/ui/Container';
import { Section, Title, Description } from './About.styles';

export default function About() {
    return (
        <Section id="about">
            <Container>
                <Title>Sobre Mim</Title>
                <Description>
                    Sou desenvolvedor Full Stack há 3 anos com foco no desenvolvimento
                    de aplicações web modernas utilizando React, Next.js,
                    Node.js e TypeScript.
                </Description>
                <Description>
                    Tenho interesse em criar soluções performáticas,
                    escaláveis e intuitivas, buscando sempre escrever código
                    limpo, organizado e de fácil manutenção.
                </Description>
                <Description>
                    Cursei Análise e Desenvolvimento de Sistemas, continuo
                    aprimorando minhas habilidades através de projetos
                    pessoais, estudos e novos desafios.
                </Description>
            </Container>
        </Section>
    )   
}