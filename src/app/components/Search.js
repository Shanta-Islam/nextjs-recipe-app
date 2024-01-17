"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = () => {
    const router = useRouter();
    const [text, setText] =useState("");
    const [query] =useDebounce(text, 500);
    useEffect(()=>{
       if(!query){
        router.push(`/`)
       }
       else{
        router.push(`/?search=${query}`)
       }
        
    },[query, router])
    return (
        <div className="m-10">
            <input onChange={(e)=> setText(e.target.value)} className="block w-full rounded-md py-5 px-2" placeholder="Search by title"/>
        </div>
    );
};

export default Search;