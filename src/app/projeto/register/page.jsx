'use client'

import HeaderUser from "@/components/components_user/headerUser"
import { useState } from "react"
import { useRouter } from "next/navigation";
import InputField from "@/components/inputFields";

export default function update() {
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const router = useRouter();

    const submit = async () => {

        const url = `http://localhost:4000/user/verify?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

        const r = await fetch( url, {

            method: "GET",
            headers: {"Content-Type": "application/json"},

          })
        
        if(r?.ok){

            const data = await r.json()
            

            console.log('ID verificado e setado: ', data.id)


                alert("Usuário encontrado! Redirecionando...");

                router.push(`/projeto/register/reg?id_router=${data.id}`)
            
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
                        <h1 className="text-3xl font-semibold text-center"> Verificar Dados </h1>

                            <div className="flex flex-col gap-1 w-[300px]">

                            <InputField
                                    id="name"
                                    label="Nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <InputField
                                    id="email"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>

                        <button onClick={submit} className="w-full mt-10 bg-slate-300">Verificar</button>

                    </div>
                </div>
            </>
        )
    }
      