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
            description: 'Implemented testing suites for Python and Scala, improving code coverage from 0 to 85% across 3 repositories; built new features with PySpark and Hadoop; underwent training which culminated in a stock trading app using React, Java, and Spring',
            skills: 'Python Scala'
        },
        {
            title: 'Software Developer Intern',
            company: 'Citigroup',
            period: '2023',
            description: 'Developed the UI/UX for a Depth Liquidity Adjustments grid with Angular, NgRx, RxJS, TypeScript, Sass, and HTML; integrated Playwright for end-to-end testing, replacing the need for a TestComplete license, saving thousands firmwide',
            skills: 'Angular TypeScript'
        },
        {
            title: 'Software Developer Intern',
            company: 'BDO',
            period: '2022',
            description: 'Implemented resource hierarchies, filters, and notifications with Angular, TypeScript, ASP.NET Core, Entity Framework Core, C#, and SQL; integrated ABP applications, API gateways, and microservices; migrated a repo to the LeptonX theme',
            skills: 'Angular TypeScript'
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: 'Developed a full-stack Android application that can collect sensor data, such as illuminance, azimuth, pitch, and roll, for visible light communication research using Kotlin, SQLite, and Jetpack; investigated 5+ issues in a Java repository',
            skills: 'Kotlin Python'
        },
        {
            title: 'Software Developer Intern',
            company: 'Llettonna',
            period: '2020',
            description: 'Implemented a REST API using Java, MySQL, and Postman; debugged a codebase containing React, Redux, MUI, JavaScript, Tailwind CSS, and HTML; researched the pros and cons of migrating to PostgreSQL or cloud services like AWS',
            skills: 'React Java'
        },
        {
            title: 'Software Developer',
            company: 'Memofood',
            period: '2019',
            description: 'Designed logos with Adobe Photoshop; prototyped on Figma; developed a full-stack web application using JavaScript, CSS, Bootstrap, HTML, and Git; pitched to angel investors and won the Best Overall Project award at Western University',
            skills: 'JavaScript Figma'
        },
        {
            title: 'Head Altar Server',
            company: 'St. Pat\'s',
            period: '2010',
            description: 'Awarded the Serra International Bishop’s Altar Server medallion; resolved IT-related issues regarding live streaming; founding member of the De Mazenod Door ministry and invited Prime Minister Trudeau to help serve 500+ meals per day',
            skills: ''
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}
