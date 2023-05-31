"use client";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import useSWR from "swr";
import Image from "next/image";

export default function Page() {
    const fetcher = url => fetch(url).then(res => res.json())
    const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/achievements/`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <LayoutWrapper>
            <div className={"flex flex-col sm:items-center pb-20 sm:pb-0"}>
                <div className={"px-5 sm:px-0 sm:w-2/3 my-10 font-heiti font-bold text-3xl"}>
                    成就
                </div>
                <div className="w-full h-px bg-zinc-800 mb-10"/>
                <ul className={"mx-5 sm:mx-0 sm:w-2/3 list-disc"}>
                    {sortedData.map((achievement, index) => {
                        return (
                            <li key={index} className={"my-2"}>
                                {achievement.achievement_name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </LayoutWrapper>
    )
}