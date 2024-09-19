import React from 'react';
import { Loading } from "@/pages/index";
import { useGetAllProjectsQuery } from '@/stores/services/project';
import { projectData } from '@/types/index';
import { Button } from '@/components';

const Project: React.FC = () => {
    const { isLoading, data } = useGetAllProjectsQuery({ page: 1, limit: 50, search: "" });

    if (isLoading) {
        return <Loading />;
    }

    const { projects, totalProjects } = data || { projects: [], totalProjects: 0 };

    // Function to handle creating a new project
    const handleCreateProject = () => {
        console.log("Create new project");
        // You can navigate to a new page or show a modal here
    };

    return (
        <div className='w-full'>
            <h1 className='text-white font-bold text-center text-4xl flex flex-col items-center justify-center pt-8'>Projects</h1>

            <div className='flex items-end justify-center px-4' >
                <Button isLoading={isLoading}
                    onClick={handleCreateProject}
                    className='ml-auto'
                >
                    Add New Project
                </Button>
            </div>

            {totalProjects === 0 ? (
                <p className='text-center min-h-screen flex items-center justify-center font-bold text-white'>No projects available.</p>
            ) : (
                <ul>
                    {projects.map((project: projectData) => (
                        <li key={project._id}>
                            <h2 className='text-white'>{project.title}</h2>
                            <img src={project.img} alt={project.title} className='w-full h-auto' />
                            <p>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className='text-blue-300'>View Project</a>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Project;
