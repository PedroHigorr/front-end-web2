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

        const r = await fetch(url, {

            method: "GET",
            headers: { "Content-Type": "application/json" },

        })

        if (r?.ok) {

            const data = await r.json()


            console.log('ID verificado e setado: ', data.id)


            alert("Usuário encontrado! Deletando...");

            const deletar = await del(data.id)

            if (deletar) {
                router.push(`/`)
            }


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

    const del = async (id) => {

        console.log(id)

        const res = await fetch(`http://localhost:4000/user/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })

        if (res.ok) {

            return res
        }

        return !res
    }

    return (
        <>
            <HeaderUser />
            <div className="flex justify-center items-center h-screen bg-cdark">
                <div className="bg-cgrey text-cdark p-10 rounded-md shadow-md items-center">
                    <h1 className="text-3xl font-semibold text-center"> Deletar Dados de Usuário</h1>

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

                    <button onClick={submit} className="w-full mt-10 bg-slate-300">Deletar</button>

                </div>
            </div>
        </>
    )
}
