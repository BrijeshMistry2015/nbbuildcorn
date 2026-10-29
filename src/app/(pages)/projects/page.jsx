import React from 'react'
import api from '@/helper/api.interceptor';
import ProjectList from '@/components/ProjectList/ProjectList';

async function Page() {
    const [projects] = await Promise.all([
        api.Propertylist()
    ]);

    return (
        <>
            <ProjectList projects={projects} />
        </>
    );
}

export default Page;