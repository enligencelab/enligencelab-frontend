import LayoutWrapper from './components/LayoutWrapper'
import './globals.css'
import mainPageLink from "@/app/MainPageLink";

export default function Home() {

    return (
        <LayoutWrapper>
            <div className={"flex sm:h-2/3 flex-col justify-center sm:overflow-hidden"}>
                <div className={"text-3xl sm:text-6xl mb-5 font-bold title-gradient sm:text-left text-center"}>
                    欢迎来到立思实验室
                </div>
                <div className={"text-3xl sm:text-4xl font-bold title-gradient sm:text-left text-center h-20"}>
                    Welcome to Enligence Laboratory
                </div>
            </div>

            <div className="mt-10 sm:mt-0 grid text-center sm:grid-cols-4 sm:text-left pb-20 sm:pb-0">
                {mainPageLink.map((data, index) => {
                    return (
                        <a
                            href={data.href}
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                        >
                            <h2 className={"mb-3 text-2xl"}>
                                {data.title}{' '}
                                <span
                                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                            </h2>
                            <p className={"m-0 text-sm opacity-50"}>
                                {data.description}
                            </p>
                        </a>
                    )
                })}
            </div>
        </LayoutWrapper>
    )
}
