
"use client"

import { getAllIngredients } from "../../../../utils/getAllIngredients";
import { getRecipeById } from "../../../../utils/getRecipeById";



const page = async ({ params }) => {
    const { id } = params;
    const recipe = await getRecipeById(id);
    const {title, instruction, ingredients, photo} = recipe;
    // console.log(id);
    const ingredientss = await getAllIngredients();
    // const [selectOptions, setSelectOptions] = useState([]);
    // console.log(ingredients)
    const handleUpdateRecipe = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const instruction = form.instruction.value;
        const photo = form.photo.value;

        const newRecipe = { title, instruction, photo }

        fetch(`https://recipe-server-taupe.vercel.app/update-recipe/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    alert("recipe updated successfully");

                }
                
            })

    }

    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold text-center">Recipe app</h1>
            <h2 className="text-3xl text-center mt-10">Edit Recipe</h2>
            <form onSubmit={handleUpdateRecipe}>
                {/* form title and ingredients row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Recipe Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" defaultValue={title} placeholder="Title" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full select-multiple" name='ingredients' defaultValue={ingredients} required>
                                {
                                    ingredientss?.map(i => <option key={i._id} value={i.label}>{i.label}</option>)
                                }

                            </select>
                        </label>
                    </div>
                </div>
                {/* form instruction and img url row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Instructions</span>
                        </label>
                        <label className="input-group">
                            <textarea name="instruction" defaultValue={instruction} className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Thumbnail Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} name="photo" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Recipe" className="btn btn-block bg-[#7B67F6] text-white" />

            </form>

        </div>

    );
};

export default page;