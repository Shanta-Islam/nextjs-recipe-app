export const getAllRecipes = async(title)=>{
    const res = await fetch(`https://recipe-server-taupe.vercel.app/recipes?title=${title}`,{
        cache: "no-store"
    })
    return res.json()
}