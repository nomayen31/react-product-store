

const ProductsCard = ({product}) => {
    console.log(product);
    const {name, price, image, description } = product;
    return (
        <>
        <div>
           
           <div className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                   <img src={image} alt="Shoes" className="rounded-xl w-[270px] h-[200px]" />
               </figure>
               <div className="card-body items-center text-center">
                   <h2 className="card-title">{name}</h2>
                   <p>{description}</p>
                   <p>{price}</p>
                   <div className="card-actions">
                       <button className="btn btn-primary">Buy Now</button>
                   </div>
               </div>
           </div>
       </div>
        </>
    );
};

export default ProductsCard;