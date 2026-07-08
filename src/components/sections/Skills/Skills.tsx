import Container from '@/components/ui/Container';
import { Section, Title, Content, Column, Subtitle, SkillList, Skill, EducationCard, EducationTitle, EducationDescription} from './Skills.styles';

const skills = [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Express',
    'React Native',
    'Styled Components',
    'SQL(MySQL, PostgreSQL)',
    'NoSQL(MongoDB)',
    'Git',
    'GitHub',
    'REST API',
    'WEBSockets',
    'AWS',
    'CI/CD',
]

export default function Skills(){
    return(
        <Section id='skills'>
            <Container>
                <Title>Tecnologias & Formação</Title>
                <Content>
                    <Column>
                        <Subtitle>Tecnologias</Subtitle>
                        <SkillList>
                            {skills.map((skill) => (
                                <Skill key={skill}>{skill}</Skill>
                            ))}
                        </SkillList>
                    </Column>
                    <Column>
                            <Subtitle>Formação</Subtitle>
                            <EducationCard>
                                <EducationTitle>Análise e Desenvolvimento de Sistemas</EducationTitle>
                                <EducationDescription>Estácio de Sá · 2024 - 2026 </EducationDescription>
                            </EducationCard>
                            <EducationCard>
                                <EducationTitle>Formação de Node.Js com Express</EducationTitle>
                                <EducationDescription>Alura · 2024</EducationDescription>
                            </EducationCard>
                    </Column>
                </Content>
            </Container>
        </Section>
    )
}