'use client'
import HeaderProject from "@/components/components_project/headerProject";
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation";
import InputField from "@/components/inputFields";


export default function update() {

  const router = useRouter();
  const searchParams = useSearchParams()
  const [name, setName] = useState('')
  const [nameAtt, setNameAtt] = useState('')
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [language, setLanguage] = useState('')
  const [userId, setId] = useState(null);

  useEffect(() => {

    const idRouter = searchParams.get("id_router");
    if (idRouter) {
      setId(idRouter);
      console.log("ID capturado da URL:", idRouter); 
    }

  }, [searchParams]);


  const submit = async () => {


    const r = await fetch(`http://localhost:4000/project/${name}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nameAtt, description, link, language, userId })
    })

    if (r?.ok) {

      const data = await r.json()

      console.log(data.message)

      alert("Usuário Atualizado! Redirecionando para home...");

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
      <HeaderProject />
      <div className="flex justify-center items-center h-screen bg-cdark">
        <div className="bg-cgrey text-cdark p-10 rounded-md shadow-md ">
          <h1 className="text-3xl font-semibold text-center"> Atualizar Projeto</h1>

          <div className="flex flex-col gap-1 w-[300px]">


          <InputField
              id="name"
              label="Nome atual do projeto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />


          <InputField
              id="nameAtt"
              label="Novo nome do projeto"
              value={nameAtt}
              onChange={(e) => setNameAtt(e.target.value)}
            />

            <InputField
              id="description"
              label="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />


            <InputField
              id="link"
              label="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />


            <InputField
              id="language"
              label="Linguagem"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />

          </div>

          <button onClick={submit} className="w-full mt-10 bg-slate-300">Atualizar</button>

        </div>
      </div>
    </>
  )
}