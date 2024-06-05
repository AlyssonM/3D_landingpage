import { meta, shopify, starbucks, auris, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    university,
    question,
    danger,
    idea,
    egg,
    Hive,
    edital,
    search,
    profits,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Auris",
        company_name: "Hive Hue",
        icon: auris,
        iconBg: "#accbe150",
        date: "Junho 2024 - Agosto 2024",
        points: [
            "Desenvovimento de uma aplicação web assistida por I.A para o rastreamento de demandas e problemas.",
            "Uma metodologia integrada e verticalizada, capaz de realizar cruzamento de informações desde o chão de fábrica até a alta gestão.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: university,
        theme: 'btn-back-blue',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];

export const metodology = [
    {
        iconUrl: question,
        theme: 'btn-back-black',
        name: 'Inovação Aberta',
        description: 'Você sabe como funciona e o quanto demora atualmente um programa ou desafio de inovação aberta?',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: danger,
        theme: 'btn-back-red',
        name: 'Detecção do Problema',
        description: 'A empresa detecta um problema interno e decide usar inovação aberta para solucioná-lo.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: idea,
        theme: 'btn-back-yellow',
        name: 'Busca por Parceiros',
        description: "A empresa busca por HUB's de inovação, academias, empresas especialistas em inovação aberta para rodar desafios.",
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: edital,
        theme: 'btn-back-black',
        name: 'Criação do Edital',
        description: 'Cria-se o edital com as oportunidades e obrigações que os candidatos terão ao serem escolhidos para determinada proposta.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: search,
        theme: 'btn-back-blue',
        name: 'Busca por Candidatos',
        description: 'As empresas fazem a divulgação do edital, buscando atrar o maior número de candidatos.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: profits,
        theme: 'btn-back-green',
        name: 'Avaliação e Seleção de Projetos',
        description: 'Os candidatos que atenderam todos os requisitos tem seus projetos avaliados e classificados.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: egg,
        theme: 'btn-back-yellow',
        name: 'Incubação',
        description: 'Após a validação, a ideia passa pelo processo de incubação para amadurecimento e organização comercial.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: Hive,
        theme: 'btn-back-blue',
        name: 'Hive Hue Flow',
        description: 'Vamos tornar o processo de inovação aberta mais rápido, seguro e popular!',
        link: 'https://github.com/adrianhajdin/pricewise',
    }

];