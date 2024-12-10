'use client'

import HeaderUser from "@/components/components_user/headerUser"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function update() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter();

    const submit = async (nome, email) => {

        const url = `http://localhost:4000/user/verify?name=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}`;

        const r = await fetch( url, {

            method: "GET",
            header: {"Content-Type": "application/json"},

          })
        
        if(r?.ok){

            const data = await r.json()
            
            console.log(data.message)

            if(data.exists){
                alert("Usuário encontrado! Redirecionando...");

                router.push('/usuario/update/${data.id}')
            }
            
            else {
                alert("Usuário não encontrado. Verifique os dados.");
            }
          }else{
      
            const data = await r.json()
            
            if(data.message){
      
              if(Array.isArray(data.message)){
              
                alert(data.message.join('\n'))
              
              }else{
                alert(data.message)
              }
            } else { 
              alert('Ocorreu um erro desconhecido. verifique os dados')
            } 
          }
        }

        return (
            <>
            <HeaderUser/>
                <div className="flex justify-center items-center h-screen bg-cdark"> 
                    <div className="bg-cgrey text-cdark p-10 rounded-md shadow-md "> 
                        <h1 className="text-3xl font-semibold text-center"> Atualizar Dados </h1>

                            <div className="flex flex-col gap-1 w-[300px]">
                                <div className="relative py-2">
                                    <input 
                                    id="outlined" 
                                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-cdark appearance-none focus:outline-none focus:ring-0 focus:border-cpurple peer"             
                                    type="text"
                                    placeholder=" "  
                                    value={name} 
                                    onChange={event => setName(event.target.value)}/>

                                    <label 
                                    htmlFor="outlined" 
                                    className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Nome
                                    </label>
                                </div>

                                    <div className="relative py-2">
                
                                    <input 
                                    id="outlined2" 
                                    className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-cdark appearance-none focus:outline-none focus:ring-0 focus:border-cpurple peer"             
                                    type="text"
                                    placeholder=" "  
                                    value={email} 
                                    onChange={event => setEmail(event.target.value)}/>

                                    <label 
                                    htmlFor="outlined2" 
                                    className="absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Email
                                    </label>

                                    </div>

                            </div>

                        <button onClick={submit} className="w-full mt-10 bg-slate-300">Atualizar</button>

                    </div>
                </div>
            </>
        )
    }
      