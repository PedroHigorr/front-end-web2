'use client'

import { usePathname } from "next/navigation" //Pathname acessa o caminho atual
import Link from 'next/link' // Substitui o <a> de maneira OTIMIZADA, não carrega toda a pagina

export default function NavProject(){
    
    const path = usePathname()

    return(
        <nav>
            <ul className="text-cmount flex gap-3">
            <li><Link href="/" className={`${path === '/' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Home</Link></li>
                <li><Link href="/projeto/dashboard" className={`${path === '/projeto/dashboard' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Projetos</Link></li>
                <li><Link href="/projeto/register" className={`${path === '/projeto/register' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Cadastrar</Link></li>
                <li><Link href="/projeto/update" className={`${path === '/projeto/update' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Atualizar</Link></li>
                <li><Link href="/projeto/delete" className={`${path === '/projeto/delete' && 'text-cgrey border-b-4 border-b-cpowerPurple'}`}>Deletar</Link></li>
            </ul>
        </nav>
    )
}