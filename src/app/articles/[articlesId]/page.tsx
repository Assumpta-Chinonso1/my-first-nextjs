"use client"

import Link from "next/link"
import { use } from "react"

export default  function Articles({
    params,
     searchParams,
    

} : {

    params: Promise<{articlesId: string}>
    searchParams: Promise<{lang?: "en" | "es" | "fr"}>

}) {
    const {articlesId} = use (params);
    const {lang = "en"} = use (searchParams);
     
    return(

        <div>
              <h1>News Article {articlesId}</h1>
              <br />
              <p>Reading in Language {lang} </p>
       
     
     <div>
        <Link href={`/articles/${articlesId}?lang=en`} >English</Link>
        <br />
         <Link href={`/articles/${articlesId}?lang=es`} >Spanish</Link>
         <br />
          <Link href={`/articles/${articlesId}?lang=fr`}>French</Link>
     </div>
      </div>
    )
}