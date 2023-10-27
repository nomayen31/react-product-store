import { Link } from "react-router-dom";


const ProductsCard = ({ product }) => {
    console.log(product);
    const {id, name, price, image, description } = product;
    return (
        <>
           <Link to={"/product-details/"+product.id+"/"+product.name}>
                <div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={image} alt="Shoes" className="rounded-xl w-[270px] h-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">Name: {name}</h2>
                            <p>Description:  {description}</p>
                            <p>Price: {price} Tk.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProductsCard;