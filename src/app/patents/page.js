"use client";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import useSWR from "swr";
import Image from "next/image";

export default function Page() {
    const fetcher = url => fetch(url).then(res => res.json())
    const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/patents/`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <LayoutWrapper>
            <div className={"flex flex-col sm:items-center pb-20 sm:pb-0"}>
                <div className={"px-5 sm:px-0 sm:w-2/3 my-10 font-heiti font-bold text-3xl"}>
                    知识产权
                </div>
                <div className="w-full h-px bg-zinc-800"/>
                {sortedData.map((patent, index) => {
                    return (
                        <div key={index} className={"mx-5 sm:mx-0 sm:w-2/3"}>
                            <div className={"font-heiti my-5"}>
                                {patent.patent_name}
                            </div>
                            <Image alt={patent.patent_name}
                                   src={`${process.env.NEXT_PUBLIC_API_URL}/${patent.patent_photo}`} width={1000}
                                   height={2000}/>
                        </div>
                    )
                })}
            </div>
        </LayoutWrapper>
    )
}