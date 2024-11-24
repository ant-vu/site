import React, { createContext, useContext } from 'react';

const WorkContext = createContext();

export const useWorkContext = () => useContext(WorkContext);

export function WorkProvider({ children }) {
    /**
     * Array of job objects representing work experience.
     * @type {Array<Object>}
     */
    const jobs = [
        {
            title: 'Software Developer',
            company: 'Citigroup',
            period: '2024',
            description: 'Engineered a full-stack investment management service with React, JavaScript, Bulma, HTML, Java, Spring Boot, MySQL, Docker, Git, and Alpha Vantage API, where users can open cash accounts and invest in REITs, ETFs, stocks, and crypto',
            skills: ''
        },
        {
            title: 'Software Developer Intern',
            company: 'Citigroup',
            period: '2023',
            description: 'Programmed the UI/UX for a Depth Liquidity Adjustments grid with Angular, NgRx, RxJS, TypeScript, Sass, HTML, and MySQL, and merged Playwright for end-to-end testing, replacing the need for a TestComplete license (saving ~$5000/year)',
            skills: ''
        },
        {
            title: 'Software Developer Intern',
            company: 'BDO',
            period: '2022',
            description: 'Implemented resource hierarchies, filters, and notifications with Angular, TypeScript, ASP.NET Core, Entity Framework Core, C#, MySQL, and Node.js, and hosted Docker containers for Grafana, Prometheus, Redis, RabbitMQ, and Kibana',
            skills: ''
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: 'Developed a full-stack Android application that can collect sensor data, such as illuminance, azimuth, pitch, and roll, using Kotlin, SQLite, and Jetpack for visible light communication at the Free-Space Optical Communication Algorithms Lab',
            skills: ''
        },
        {
            title: 'Software Developer Intern',
            company: 'Llettonna',
            period: '2020',
            description: 'Created a REST API using Java, MySQL, and Postman, fixed 5+ bugs from a front-end codebase containing React, Redux, MUI, JavaScript, Tailwind CSS, and HTML, and documented potential migrations to PostgreSQL, MongoDB, and AWS',
            skills: ''
        },
        {
            title: 'Software Developer',
            company: 'Memofood',
            period: '2019',
            description: 'Designed logos on Adobe Photoshop, conducted interviews with Figma mockups, and coded a full-stack web platform using JavaScript, Bootstrap, HTML, and PostgreSQL, resulting in winning the Best Overall Project award at Western University',
            skills: ''
        },
        {
            title: 'Head Altar Server',
            company: 'St. Pat\'s',
            period: '2010',
            description: 'Received the Serra International Bishop’s Altar Server medallion, resolved IT-related issues regarding live streaming, and cofounded the De Mazenod Door Outreach ministry, which invited Prime Minister Trudeau to help serve 550+ meals/day',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}
