import Container from '@/components/ui/Container';
import SocialButton from '@/components/ui/SocialButton'
import { projects } from '@/data/projects';
import { Section, Title, List, Card, Content, ProjectTitle, Description, Technologies, Technology, Buttons } from './Projects.styles'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects(){
    return(
        <Section id='projects'>
            <Container>
                <Title>Projetos</Title>
                <List>
                    {projects.map((project, index) => (
                        <Card key={project.id} $reverse={index % 2 !== 0}>
                            <Content>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <Description>{project.description}</Description>
                                <Technologies>
                                    {project.technologies.map((tech) => (<Technology key={tech}> {tech} </Technology>))}
                                </Technologies>
                                <Buttons>
                                    <SocialButton href={project.github} icon={<FaGithub />}>Github</SocialButton>
                                    {project.demo && (<SocialButton href={project.demo} icon={<FaExternalLinkAlt />}>Link do projeto</SocialButton>)}
                                </Buttons>
                            </Content>
                        </Card>
                    ))}
                </List>
            </Container>
        </Section>
    )
}