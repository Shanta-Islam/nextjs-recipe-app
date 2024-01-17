"use client"
import Link from "next/link";
import { getAllRecipes } from "../../../utils/getAllRecipes";
import { useRouter } from "next/navigation";
import Search from "./Search";

const AllRecipe = async () => {
    const router = useRouter();
    const recipes = await getAllRecipes();
    const handleDelete = (id) => {
        // console.log(id)
        fetch(`https://recipe-server-taupe.vercel.app/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    alert('Error')
                }
                else {

                    // remove the user from the UI

                    // const remainingUsers = assignments && assignments.filter(item => (item._id !== id));
                    // setAssignments(remainingUsers);
                    alert('Deleted Successfully');
                    router.refresh();

                }

            })
    }
    return (
        <div>
            <Search/>
            <h2 className="text-center mt-5 font-3xl">All Recipes</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    recipes?.map(recipe => <div key={recipe._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={recipe.photo} alt="img" className="w-full h-60" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{recipe.title}</h2>
                            {/* <p>Ingredients: {recipe.ingredients}</p> */}
                            <div className="card-actions justify-end">
                                <Link href={`/detailsRecipe/${recipe._id}`}><button className="btn btn-sm btn-primary">Details</button></Link>
                                <Link href={`/editRecipe/${recipe._id}`}><button className="btn btn-sm btn-primary">Edit</button></Link>
                                <button className="btn btn-sm bg-red-600 text-white" onClick={() => handleDelete(recipe._id)}>Delete</button>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllRecipe;