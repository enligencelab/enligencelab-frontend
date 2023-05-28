"use client";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import useSWR from "swr";
import Image from "next/image";
import TeacherProfileCard from "@/app/members/TeacherProfileCard";
import GraduateProfileCard from "@/app/members/GraduateProfileCard";
import UndergraduateProfileCard from "@/app/members/UndergraduateProfileCard";

const fetcher = url => fetch(url).then(res => res.json())

export default function Page() {
    const {
        data: teachers,
        error: teachersError
    } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/people/teachers/`, fetcher);
    const {
        data: graduates,
        error: graduatesError
    } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/people/graduates/`, fetcher);
    const {
        data: undergraduates,
        error: undergraduatesError
    } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/people/undergraduates/`, fetcher);

    if (teachersError || graduatesError || undergraduatesError) return <div>failed to load</div>;
    if (!teachers || !graduates || !undergraduates) return <div>loading...</div>;

    const sortedTeachers = teachers.sort((a, b) => new Date(b.date_joined) - new Date(a.date_joined));
    const sortedGraduates = graduates.sort((a, b) => new Date(b.date_joined) - new Date(a.date_joined));
    const sortedUndergraduates = undergraduates.sort((a, b) => new Date(b.date_joined) - new Date(a.date_joined));

    return (
        <LayoutWrapper>
            <div className={"flex flex-col sm:items-center sm:pb-0"}>
                <div className={"px-5 sm:px-0 my-10 sm:w-full font-heiti font-bold text-3xl"}>
                    教师
                </div>
            </div>
            <div className={"grid sm:grid-cols-4 pb-20 sm:pb-0"}>
                {sortedTeachers.map((teacher, index) => {
                    return (
                        <TeacherProfileCard key={index} data={teacher}/>
                    )
                })}
            </div>
            <div className={"flex flex-col sm:items-center sm:pb-0"}>
                <div className={"px-5 sm:px-0 my-10 sm:w-full font-heiti font-bold text-3xl"}>
                    在读学生
                </div>
            </div>
            <div className={"grid sm:grid-cols-4 pb-20 sm:pb-0"}>
                {sortedUndergraduates.map((undergraduate, index) => {
                    return (
                        <UndergraduateProfileCard key={index} data={undergraduate}/>
                    )
                })}
            </div>
            <div className={"flex flex-col sm:items-center sm:pb-0"}>
                <div className={"px-5 sm:px-0 my-10 sm:w-full font-heiti font-bold text-3xl"}>
                    已毕业学生
                </div>
            </div>
            <div className={"grid sm:grid-cols-4 pb-20 sm:pb-0"}>
                {sortedGraduates.map((graduate, index) => {
                    return (
                        <GraduateProfileCard key={index} data={graduate}/>
                    )
                })}
            </div>
        </LayoutWrapper>
    )
}