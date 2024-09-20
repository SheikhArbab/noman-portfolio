import React, { useEffect, useState } from 'react';
import { Loading } from "@/pages/index";
import { useGetAllProjectsQuery } from '@/stores/services/project';
import { projectData } from '@/types/index';
import { Button, ProjectModal } from '@/components/index';

const Project: React.FC = () => {
    const { isLoading, data, refetch } = useGetAllProjectsQuery({ page: 1, limit: 50, search: "" });

    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);

    useEffect(() => {
        refetch()
    }, [])


    if (isLoading) {
        return <Loading />;
    }

    const { projects, totalProjects } = data || { projects: [], totalProjects: 0 };



    return (
        <div className='w-full'>
            <h1 className='text-white font-bold text-center text-4xl flex flex-col items-center justify-center pt-8'>Projects</h1>

            <div className='flex items-end justify-center px-4' >
                <Button isLoading={isLoading}
                    onClick={() => setShowProjectModal(!showProjectModal)}
                    className='ml-auto'
                >
                    Add New Project
                </Button>
            </div>
            {showProjectModal && <ProjectModal
                isUpdate={false}
                setShowProjectModal={setShowProjectModal}
                showProjectModal={showProjectModal}
            />}
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
