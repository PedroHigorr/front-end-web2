
import Nav from "@/components/nav"
import Logo from "@/components/logo"

export default function Header(){
    return (
        <div className="flex bg-cdark h-14 dark:bg-cdark items-center p-5 justify-between">
            <Logo></Logo>
            <Nav />
        </div>
    )
}