import Image from "next/image";
import Link from "next/link";

export default function GraduateProfileCard(props) {
    if (props.data.github_account !== null) {
        return (
            <Link href={props.data.github_account}
                  className={"flex sm:flex-col flex-row mx-5 sm:mx-0 sm:text-center items-center rounded-lg border border-transparent mb-10 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"}>
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${props.data.avatar}`} alt={props.data.username}
                       height={100} width={100} className="h-auto rounded-full mb-2"/>
                <div className={"mx-10 sm:mx-0"}>
                    <div className={"font-heiti font-bold"}>{props.data.username}</div>
                    <div>{props.data.school}</div>
                    <div>{props.data.department}</div>
                    <div>{new Date(props.data.graduated_date).getFullYear()}</div>
                </div>
            </Link>
        )
    } else {
        return (
            <div
                className={"flex sm:flex-col flex-row mx-5 sm:mx-0 sm:text-center items-center rounded-lg border border-transparent mb-10"}>
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${props.data.avatar}`} alt={props.data.username}
                       height={100} width={100} className="h-auto rounded-full mb-2"/>
                <div className={"mx-10 sm:mx-0"}>
                    <div className={"font-heiti font-bold"}>{props.data.username}</div>
                    <div>{props.data.school}</div>
                    <div>{props.data.department}</div>
                    <div>{new Date(props.data.graduated_date).getFullYear()}</div>
                </div>
            </div>
        )
    }

}