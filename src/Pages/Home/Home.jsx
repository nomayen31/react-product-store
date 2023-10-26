import Banner from '../../Components/Banner/Banner';
import Layout from '../../Layout/Layout';


const Home = () => {
    const productsData = 
        [
            {
                id: 1,
                name: "Product A",
                price: 19.99,
                quantity: 50
            },
            {
                id: 2,
                name: "Product B",
                price: 29.99,
                quantity: 30
            },
            {
                id: 3,
                name: "Product C",
                price: 9.99,
                quantity: 100
            },
            {
                id: 4,
                name: "Product D",
                price: 49.99,
                quantity: 25
            },
            {
                id: 5,
                name: "Product E",
                price: 39.99,
                quantity: 75
            }
        ]
        


   
    return (
        <div>
            <Layout>
                <Banner></Banner>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto ">
                    {
                        productsData.map(product=> 
                            <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>  
                        )
                    }
                </div>
            </Layout>
        </div>
    );
};

export default Home;