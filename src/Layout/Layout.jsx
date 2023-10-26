import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;