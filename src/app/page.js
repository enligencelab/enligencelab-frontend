"use client";
import LayoutWrapper from './components/LayoutWrapper'
import {motion} from "framer-motion"
import './globals.css'

export default function Home() {

    return (
        <LayoutWrapper>
            <div className={"flex sm:h-2/3 flex-col justify-center sm:overflow-hidden"}>
                {/*<motion.h1*/}
                {/*    initial={{opacity: 0}}*/}
                {/*    animate={{opacity: 1}}*/}
                {/*    transition={{duration: 2, delay: 1}}*/}
                {/*    className={"text-3xl sm:text-6xl mb-5 font-bold title-gradient sm:text-left text-center"}*/}
                {/*>*/}
                {/*    欢迎来到立思实验室*/}
                {/*</motion.h1>*/}
                {/*<motion.h1*/}
                {/*    initial={{x: "-100%"}}*/}
                {/*    animate={{x: "0%"}}*/}
                {/*    transition={{ease: "easeOut", duration: 2, delay: 1}}*/}
                {/*    className={"text-3xl sm:text-4xl font-bold title-gradient sm:text-left text-center"}*/}
                {/*>*/}
                {/*    Welcome to Enligence Laboratory*/}
                {/*</motion.h1>*/}
                <h1 className={"text-3xl sm:text-6xl mb-5 font-bold title-gradient sm:text-left text-center"}>
                    欢迎来到立思实验室
                </h1>
                <h1 className={"text-3xl sm:text-4xl font-bold title-gradient sm:text-left text-center"}>
                    Welcome to Enligence Laboratory
                </h1>
            </div>

            <div className="mt-10 sm:mt-0 mb-32 grid text-center sm:mb-0 sm:grid-cols-4 sm:text-left">
                <a
                    href="/about"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={"mb-3 text-2xl"}>
                        关于{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={"m-0 text-sm opacity-50"}>
                        如果你想加入我们，请务必点进来了解更多关于立思实验室的信息
                    </p>
                </a>

                <a
                    href="/members"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={"mb-3 text-2xl"}>
                        成员{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={"m-0 text-sm opacity-50"}>
                        进来认识一下我们的成员，也许你会发现一个拓宽人脉的机会
                    </p>
                </a>

                <a
                    href="/patents"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={"mb-3 text-2xl bold"}>
                        知识产权{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={"m-0 text-sm opacity-50"}>
                        立思实验室的知识产权，我们的成果，我们的荣誉
                    </p>
                </a>

                <a
                    href="/achievements"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={"mb-3 text-2xl bold"}>
                        成就{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={"m-0 text-sm opacity-50"}>
                        立思实验室的人都喜欢用成果说话，进来看看吧
                    </p>
                </a>
                <a
                    href="https://github.com/enligencelab"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={"mb-3 text-2xl bold"}>
                        GitHub{' '}
                        <span
                            className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={"m-0 text-sm opacity-50"}>
                        这个链接通向立思实验室的GitHub账户，可以进来看看有哪些开源项目吸引到了你
                    </p>
                </a>
            </div>
        </LayoutWrapper>
    )
}
