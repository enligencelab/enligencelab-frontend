import SectionContainer from "./SectionContainer";
import NavBar from "@/app/components/NavBar";

export default function LayoutWrapper({children}) {

    return (
        <SectionContainer>
            <NavBar/>
            <div className="my-20 h-screen">
                {children}
            </div>
        </SectionContainer>
    )
}