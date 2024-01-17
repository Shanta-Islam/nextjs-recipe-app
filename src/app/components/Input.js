'use client'


import { getAllIngredients } from "../../../utils/getAllIngredients";



const Input = async () => {
    const ingredients = await getAllIngredients();
    // console.log(ingredients)
    const handleAddRecipe = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const ingredients = form.ingredients.value;
        const instruction = form.instruction.value;
        const photo = form.photo.value;

        const newRecipe = { title, ingredients, instruction, photo }
        // console.log(newAssignment);
        fetch(`https://recipe-server-taupe.vercel.app/recipe`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("recipe created successfully");
                }
                form.reset();
            })

    }
    return (
        <div>
            <h2 className="text-center mt-5 font-3xl">Create New Recipe</h2>
            <form onSubmit={handleAddRecipe}>
                {/* form title and ingredients row */}
                <div className="md:flex mb-8 mt-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Recipe Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Ingredients</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full select-multiple" name='ingredients'  required>
                                {
                                    ingredients?.map(i=><option key={i._id} value={i.label}>{i.label}</option>)
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
                            <textarea name="instruction" className="textarea textarea-bordered w-full" placeholder="Description" required></textarea>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Thumbnail Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>


                <input type="submit" value="Add Recipe" className="btn btn-block bg-[#7B67F6] text-white" />

            </form>

        </div>
    );
};

export default Input;