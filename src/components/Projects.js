import { useState } from 'react';

function Projects() {
  const [expanded] = useState(false);

  const short_projects = [
    {
      name: 'ant-vu.github.io/site',
      description: 'ant-vu.github.io/site is my latest iteration of a portfolio website using React and Figma. Prototyped, tested, and deployed using various tools, it was a project that taught myself a lot about the creative process of web design.',
      link: 'https://github.com/ant-vu/site'
    }
  ];

  const more_projects = [];

  const boldWord = (text) => {
    const words = text.split(' ');
    const boldWords = ['React', 'Figma.'];
    const italicWords = [];
    return (
      <>
        {words.map((word, index) => (
          <span key={index} style={{ fontWeight: (index === 0 || boldWords.includes(word)) ? 'bold' : 'normal', fontStyle: italicWords.includes(word) ? 'italic' : 'normal' }}>
            {word}{' '}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="projects">
      <div className="space-y-4">
      <h2 className='font-DMMono font-medium ' >| Projects</h2>
        <div className='rounded border-dotted border-2 border-da_green p-4 space-y-4'>
          {short_projects.map((project, index) => (
            <div key={index} className="project-card space-y-4 ">
              <p>{boldWord(project.description)}</p>
              <div className="flex space-x-3">

              {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                >
                  <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                  <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^" className="w-4 h-4 bg-da_green border-da_green border-4"/>
                    </div>
                  </span>
                </a>
              )}
              {project.more && (
                  <a 
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                  >
                    <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      More
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^" className="w-4 h-4 bg-da_green border-da_green border-4"/>
                      </div>
                    </span>
                  </a>
                )}
                </div>
            </div>
          ))}
          <div className={`
              transition-all duration-500 ${expanded ? 'delay-500' : ''} ease-in-out
            ${expanded 
              ? 'opacity-100 max-h-[1000px]' 
              : 'opacity-0 max-h-0'}
            overflow-hidden
          `}
          >
            <div className="space-y-4">
            {more_projects.map((project, index) => (
              <div key={index} className="project-card space-y-4">
                <p>{boldWord(project.description)}</p>
                <div className='flex space-x-3'>
                {project.link && (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                >
                  <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                  <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                    Code
                    <div className="flex justify-end ml-3">
                      <img src={process.env.PUBLIC_URL + "/icons/arrow-top-right.svg"} alt="^" className="w-4 h-4 bg-da_green border-da_green border-4"/>
                    </div>
                  </span>
                </a>
                )}
                {project.more && (
                  <a 
                    href={project.more}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden transition-all bg-white hover:bg-da_green group rounded-md flex items-center justify-center w-[85px] h-[30px] border-current border-2 text-xs"
                  >
                    <span className="absolute top-0 right-0 w-full h-full bg-da_green rounded-md translate-x-full ease-out duration-200 transition-all group-hover:translate-x-0"></span>
                    <span className="relative flex items-center justify-center text-black transition-colors duration-300 ease-in-out">
                      More
                      <div className="flex justify-end ml-3">
                        <img src={process.env.PUBLIC_URL + "/icons/arrow-right.svg"} alt="^" className="w-4 h-4 bg-da_green border-da_green border-4"/>
                      </div>
                    </span>
                  </a>
                )}
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
