import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id, name } = useParams();
    console.log(id, name);
    console.log('gbgggggggggg');
    return (
        <div>
            <h1 className="px-4"> The id is {id}</h1>
                <h1 className="px-4"> The name is {name}</h1>
        </div>
    );
};

export default ProductDetails;