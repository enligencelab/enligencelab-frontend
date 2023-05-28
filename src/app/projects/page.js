'use client';
import {ProjectLink} from "@/app/projects/projectLink";
import {ProjectCard} from "@/app/projects/projectCard";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import useSWR from "swr";

export default function Page() {
    const fetcher = url => fetch(url).then(res => res.json())
    const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/projects/`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <LayoutWrapper>
            <div className={"flex flex-col sm:items-center pb-20 sm:pb-0"}>
                <div
                    className="sm:mt-10 mb-10 2xl:left-auto 2xl:right-auto xl:left-auto xl:right-auto lg:left-auto lg:right-auto sm:w-3/4 px-5">
                    <div className="max-w-2xl mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-heiti">
                            项目
                        </h2>
                        <p className="mt-4 text-zinc-400">
                            立思实验室正在进行中的项目
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-zinc-800"/>

                <div
                    className="flex px-5 mt-10 2xl:left-auto 2xl:right-auto xl:left-auto xl:right-auto lg:left-auto lg:right-auto sm:w-3/4">
                    <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                        <div className="grid grid-cols-1 gap-4">
                            {sortedData
                                .filter((_, i) => i % 3 === 0)
                                .map((project, index) => (
                                    <ProjectCard key={project.id}>
                                        <ProjectLink href={project.project_link} date={project.date}
                                                     title={project.project_name}
                                                     description={project.brief_description}/>
                                    </ProjectCard>
                                ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {sortedData
                                .filter((_, i) => i % 3 === 1)
                                .map((project, index) => (
                                    <ProjectCard key={project.id}>
                                        <ProjectLink href={project.project_link} date={project.date}
                                                     title={project.project_name}
                                                     description={project.brief_description}/>
                                    </ProjectCard>
                                ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {sortedData
                                .filter((_, i) => i % 3 === 2)
                                .map((project, index) => (
                                    <ProjectCard key={project.id}>
                                        <ProjectLink href={project.project_link} date={project.date}
                                                     title={project.project_name}
                                                     description={project.brief_description}/>
                                    </ProjectCard>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    )
}