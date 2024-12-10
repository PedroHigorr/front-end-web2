import Logo from "@/components/components_user/logo"
import NavUser from "@/components/components_user/navUser"

export default function HeaderUser(){
    return (
        <div className="flex bg-cdark h-14 dark:bg-cdark items-center p-5 justify-between">
            <Logo />
            <NavUser />
        </div>
    )
}