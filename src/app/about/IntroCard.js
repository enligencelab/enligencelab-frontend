export default function IntroCard(props){
    return (
        <div className={"px-5 sm:px-0 sm:w-2/3 my-10"}>
            <h1 className={"text-3xl font-bold mb-5 font-heiti"}>
                {props.title}
            </h1>
            <p className={"leading-loose"}>
                {props.content}
            </p>
        </div>
    )
}