export const getRecipeById = async(id)=>{
    const res = await fetch(`https://recipe-server-taupe.vercel.app/recipe-details/${id}`,{
        cache: "no-store"
    })
    return res.json()
}