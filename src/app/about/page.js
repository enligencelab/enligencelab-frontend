import LayoutWrapper from "@/app/components/LayoutWrapper";
import aboutUs from "@/app/about/about";
import IntroCard from "@/app/about/IntroCard";
import Image from "next/image";

export default function Page() {
    return (
        <LayoutWrapper>
            <div className="flex flex-col items-center pb-20 sm:pb-0">
                {aboutUs.map((about, index) => {
                    return <IntroCard title={about.title} content={about.content} key={index}/>
                })}
            </div>
        </LayoutWrapper>
    )
}