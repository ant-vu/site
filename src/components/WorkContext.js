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
            description: '',
            skills: 'Python Scala'
        },
        {
            title: 'Software Developer Intern',
            company: 'Citigroup',
            period: '2023',
            description: '',
            skills: 'Angular TypeScript'
        },
        {
            title: 'Software Developer Intern',
            company: 'BDO',
            period: '2022',
            description: '',
            skills: 'Angular TypeScript'
        },
        {
            title: 'Research Assistant',
            company: 'McMaster',
            period: '2021',
            description: '',
            skills: 'Kotlin Python'
        },
        {
            title: 'Software Developer Intern',
            company: 'Llettonna',
            period: '2020',
            description: '',
            skills: 'React Java'
        }
    ];
    return (
        <WorkContext.Provider value={jobs}>
            {children}
        </WorkContext.Provider>
    );
}
