export const getAllIngredients = async()=>{
    const res = await fetch("https://recipe-server-taupe.vercel.app/ingredients",{
        cache: "no-store"
    })
    return res.json()
}