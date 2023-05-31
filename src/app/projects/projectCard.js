export const ProjectCard = ({children}) => {

    return (
        <div
            className="overflow-hidden relative duration-700 border rounded-xl group md:gap-8 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            {children}
        </div>
    );
};