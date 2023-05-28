import Link from "next/link";

export const ProjectLink = (props) => {
    return (
        <Link href={props.href !== null ? props.href : "https://github.com/enligencelab"} target="_blank">
            <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
					<span
                        className="font-mono text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange mb-2">
						{new Date(props.date).toISOString().split('T')[0]}
					</span>
                </div>
                <h2 className="z-20 font-mono text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {props.title}
                </h2>
                <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200 font-mono">
                    {props.description !== null ? props.description : "This guy was lazy, he didn't write any description."}
                </p>
            </article>
        </Link>
    );
};