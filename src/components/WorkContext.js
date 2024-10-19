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
            description: 'Architected testing suites for Python and Scala with pytest, unittest, ScalaTest, Mockito, Jenkins, and SonarQube, improving code coverage from 0 to 85% across 3 repositories; analyzed SQL tables on Oracle SQL Developer for production issues',
            skills: 'Python Scala SQL'
        },
        {
            title: 'Software Developer Intern',
            company: 'Citigroup',
            period: '2023',
            description: 'Developed the UI/UX for a Depth Liquidity Adjustments grid with Angular, NgRx, RxJS, TypeScript, Sass, HTML, and SQL; merged Playwright for end-to-end testing, replacing the need for a TestComplete license, saving thousands firmwide',
            skills: 'Angular TypeScript Playwright'
        },
        {
            title: 'Software Developer Intern',
            company: 'BDO',
            period: '2022',
            description: 'Implemented resource hierarchies, filters, and notifications with Angular, TypeScript, ASP.NET, Entity Framework, C#, and SQL; deployed and managed Docker containers for Grafana, Prometheus, Redis, RabbitMQ, Kibana, and Elasticsearch',
            skills: 'Angular ASP.NET C#'
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: 'Coded a full-stack Android application that can collect sensor data, such as illuminance, azimuth, pitch, and roll, for visible light communication research using Kotlin, SQLite, and Jetpack; investigated 5+ issues in a Java and JUnit repository',
            skills: 'Kotlin Java SQLite'
        },
        {
            title: 'Software Developer Intern',
            company: 'Llettonna',
            period: '2020',
            description: 'Created a REST API using Java, MySQL, and Postman; eliminated 5+ bugs from a front-end codebase containing React, Redux, MUI, JavaScript, Tailwind CSS, and HTML; documented potential migrations to PostgreSQL, MongoDB, and AWS',
            skills: 'React Redux MySQL'
        },
        {
            title: 'Software Developer',
            company: 'Memofood',
            period: '2019',
            description: 'Designed logos with Adobe Photoshop; prototyped on Figma; engineered a full-stack web application using JavaScript, CSS, HTML, Bootstrap, and Git; pitched to angel investors and won the Best Overall Project award at Western University',
            skills: 'JavaScript Bootstrap Figma'
        },
        {
            title: 'Head Altar Server',
            company: 'St. Pat\'s',
            period: '2010',
            description: 'Received the Serra International Bishop\'s Altar Server medallion; resolved IT-related issues regarding live streaming; founding member of the De Mazenod Door ministry and invited Prime Minister Trudeau to help serve 500+ meals per day',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}
