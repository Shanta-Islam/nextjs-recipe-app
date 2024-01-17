import { getRecipeById } from "../../../../utils/getRecipeById";


const page = async ({ params }) => {
    const { id } = params;
    const topic = await getRecipeById(id);
    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold text-center">Recipe app</h1>
            <h2 className="text-3xl text-center mt-10">Recipe Details</h2>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={topic.photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{topic.title}</h2>
                    <p>Ingredients: {topic.ingredients}</p>
                    <p>Intruction: {topic.instruction}</p>
                </div>
            </div>
        </div>
    );
};

export default page;