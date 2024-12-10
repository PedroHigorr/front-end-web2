'use client'

import { usePathname } from "next/navigation" //Pathname acessa o caminho atual
import Link from 'next/link' // Substitui o <a> de maneira OTIMIZADA, não carrega toda a pagina

export default function NavUser(){
    
    const path = usePathname()

    return(
        <nav>
            <ul className="text-cmount flex gap-3">
                <li><Link href="/" className={`${path === '/' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Home</Link></li>
                <li><Link href="/usuario/dashboard" className={`${path === '/usuario/dashboard' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Usuario</Link></li>
                <li><Link href="/projeto/dashboard" className={`${path === '/projeto/dashboard' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Projeto</Link></li>
            </ul>
        </nav>
    )
}