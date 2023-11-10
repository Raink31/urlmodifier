"use client"

import { useState } from 'react';

export default function Home() {
  const [spanData, setSpanData] = useState("")

  function modifyString(formData: FormData) {
  
    const url = formData.get('url')?.toString();

    const newUrl: string = url?.replace("/file/d/", "/uc?export=view&id=").replace("/view?usp=drive_link", "").replace("/view?usp=sharing", "")!

    setSpanData(newUrl)
  }

  return (
    <div className='flex flex-col justify-center items-center bg-orange-300 p-8 rounded-xl gap-6 shadow-lg w-[56rem]'>
      <h1 className='font-bold text-orange-700 text-xl'>Modifier un URL Google Drive pour le partager :</h1>  
      <form action={modifyString} className='flex flex-col gap-4 w-full'>
        <input
          className='rounded-md py-2 px-4 bg-[#fafafa]'
          required
          name='url'
          type='url'
          placeholder="Entrez l'url à modifier"
        />
        <button type='submit' className='bg-orange-500 rounded-md  py-2 px-4 hover:scale-[1.02] transition-transform text-orange-900 font-bold'>{"Modifier l'url"}</button>
      </form>
      <h4 className='font-bold text-orange-700 text-lg'>Résultat :</h4>
      <span className='rounded-md py-2 px-4 bg-[#fafafa] w-full h-11'>{spanData}</span>
    </div>
  )
}
