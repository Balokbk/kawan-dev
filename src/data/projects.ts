export interface Project{
    id: number;
    title: string;
    description: string;
    github: string;
    demo?: string;
    technologies: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "App calculadora para endocrinologistas",
        description: "Aplicação em React Native para estudos voltados a área de endocrinologia.",
        github: "https://github.com/Balokbk/App_de_calculos_endocrinos",
        demo: "https://app-de-calculos-endocrinos.vercel.app/",
        technologies: ["React Native", "export", "TypeScript", "Styled Components","Git", "SQLite", "CI/CD"]
    },
    {
        id: 2,
        title: "Undercity Token",
        description: "Site para auxiliar na jogatina de partidas de Magic: The Gathering, mantendo o tracking de uma mecânica de forma intuitiva.",
        github: "https://github.com/Balokbk/Undercity-token",
        demo: "https://balokbk.github.io/Undercity-token/",
        technologies: ["HTML", "CSS", "JS", "Git"]
    },
    {
        id: 3,
        title: "Rolagem de dados customizados",
        description: "Site em React para um sistema de RPG de mesa de fácil manutenção e replicação para adicionar dados personalizados.",
        github: "https://github.com/Balokbk/Custom-dice-roller",
        demo: "https://custom-dice-roller.vercel.app/",
        technologies: ["React", "Typescript", "Styled Components","Git", "CI/CD"]
    },
    {
        id: 4,
        title: "API para gerenciamento financeiro",
        description: "API para o gerenciamento de usuários, contas e transações financeiras com documentação completa.",
        github: "https://github.com/Balokbk/Back-end-contabilidade",
        technologies: ["Express", "JavaScript", "MySQL", "JWT"]
    },
]