'use client'

import HeaderUser from "@/components/components_user/headerUser"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import InputField from "@/components/inputFields";


export default function update() {

    const router = useRouter();
    const searchParams = useSearchParams()
    const [name, setName] = useState('')
    const [id, setId] = useState(null);

    useEffect(() => {
  
      const idRouter = searchParams.get("id_router");
      if (idRouter) {
        setId(idRouter);
        console.log("ID capturado da URL:", idRouter); 
      }
  
    }, [searchParams]);

    const submit = async () => {

        console.log(id)

        const r = await fetch(`http://localhost:4000/project/${name}`, {

            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id})
        })

        if (r?.ok) {

            const data = await r.json()


            console.log('ID verificado e setado: ', data.id)


            alert("Projeto deletado! redirecionando para home...");

            router.push(`/`)
            


        } else {

            const data = await r.json()

            if (data.message) {

                if (Array.isArray(data.message)) {

                    alert(data.message.join('\n'))

                } else {
                    alert(data.message)
                }
            } else {
                alert('Ocorreu um erro desconhecido. verifique os dados')
            }
        }
    }



    return (
        <>
            <HeaderUser />
            <div className="flex justify-center items-center h-screen bg-cdark">
                <div className="bg-cgrey text-cdark p-10 rounded-md shadow-md items-center">
                    <h1 className="text-3xl font-semibold text-center"> Deletar Dados de Projeto</h1>

                    <div className="flex flex-col gap-1 w-[300px]">

                        <InputField
                            id="name"
                            label="Nome do projeto"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />


                    </div>

                    <button onClick={submit} className="w-full mt-10 bg-slate-300">Deletar</button>

                </div>
            </div>
        </>
    )
}
