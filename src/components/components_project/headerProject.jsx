import LogoProject from "./logo_p"
import NavProject from "./navProject"

export default function HeaderProject(){
    return (
        <div className="flex bg-cdark h-14 dark:bg-cdark items-center p-5 justify-between">
            <LogoProject />
            <NavProject />
        </div>
    )
}