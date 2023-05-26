import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/app/components/MobileNavBar";

export default function NavBar() {
    return (
        <div className={"flex justify-between z-50 fixed w-full bottom-0 sm:top-0 h-20 lg:w-2/3 bg-primary"}>

            <Link href={'/'} className="flex grid-cols-2 items-center">
                <Image src={"/Logo.png"} alt={"Logo"} height={50} width={50}></Image>
                <div className={"flex-row items-center"}>
                    <h1>立思实验室</h1>
                    <h1>Enligence Laboratory</h1>
                </div>
            </Link>

            <div className={"hidden sm:items-center sm:grid-cols-5 sm:flex"}>
                <Link href={"/about"} className={"hover:text-gray-600 mx-2"} >关于</Link>
                <Link href={"/members"} className={"hover:text-gray-600 mx-2"}>成员</Link>
                <Link href={"/patents"} className={"hover:text-gray-600 mx-2"}>专利</Link>
                <Link href={"/achievements"} className={"hover:text-gray-600 mx-2"}>成就</Link>
                <Link href={"https://github.com/enligencelab"} className={"hover:text-gray-600 mx-2"}>GitHub</Link>
            </div>

            <MobileNav></MobileNav>
        </div>
    )
}