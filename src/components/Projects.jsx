import React from "react";
import fetchRepositories from "../services/fetchRepositories"
import data from '../config.json'

const projectData = data.pt.projects

const Projects = () => {

  const repositories = fetchRepositories()
  
  return (
    <div name='projects' className="w-full px-8 mb-16 pt-[10%] dark:bg-warm-gray-900">
      <div className='flex flex-col justify-center items-center w-full h-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='basis-1/5'></div>
          <div className='basis-3/5'>
            <p className='dark:text-warm-gray-50 lg:text-8xl md:text-8xl sm:text-5xl text-3xl font-black text-center border-b-4 lg:border-b-8 md:border-b-8 border-yellow-400'>{projectData.title}</p>
          </div>
          <div className='basis-1/5'></div>
        </div>
      </div>
      {/* Github Rest API */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full mt-16'>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {repositories.map((repository) => {
            return(
              <>
                <div className="bg-white hover:bg-gray-50 text-black dark:bg-warm-gray-600 dark:hover:bg-warm-gray-500 dark:text-white rounded-md shadow-md p-4">
                  <div className="text-black dark:text-white text-xl text-left font-medium pl-4 pt-2">{repository.full_name}</div>
                  <div className="text-black dark:text-white text-lg text-left font-light pl-4 pt-6">{repository.description}</div>
                  <div className="pl-4 pt-6 mb-4 flex">
                    <div className="text-black dark:text-white text-xs text-left font-bold">{projectData.text_lang}</div>
                    {/* TODO: multiple languages */}
                    <div className="text-left text-xs pl-1">{repository.language}</div>
                  </div>
                  <div className="flex">
                    <div className="pl-4 mb-4 flex items-center">
                      <div className="text-black dark:text-white text-xs text-left font-bold mr-1">{projectData.text_stars}</div>
                      <div className="text-left text-xs bg-gray-900 text-white dark:bg-white dark:text-warm-gray-800 p-0.5 rounded-lg">{repository.stargazers_count}</div>
                    </div>
                    <div className="pl-4 mb-4 flex items-center">
                      <div className="text-black dark:text-white text-xs text-left font-light mr-1"><small>{projectData.text_updated} {new Date(repository.pushed_at).toLocaleDateString()}</small></div>
                    </div>
                  </div>
                  <hr className='mb-4'/>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button className='rounded-md bg-blue-600 text-white p-2'>
                      <a href={repository.svn_url+"/archive/refs/tags/v1.0.zip"} className='flex items-center justify-center'>
                        <svg className="fill-white w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 8h-2v2h-2v-4h4v2zm8 16v-2h-6v2h6zm2-16h2v2h2v-4h-4v2zm2 12v2h-2v2h4v-4h-2zm-12 2h-2v-2h-2v4h4v-2zm14-10h-2v6h2v-6zm-16 6v-6h-2v4h-4v-14h14v4h-4v2h6v-8h-18v18h8z"/></svg>
                        <span>{projectData.text_clone}</span>
                      </a>
                    </button>
                    <button className='rounded-md bg-warm-gray-800 text-white p-2'>
                      <a href={repository.html_url} className='flex items-center justify-center'>
                        <svg className="fill-white w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        <span>{projectData.text_repo}</span>
                      </a>
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}


export default Projects