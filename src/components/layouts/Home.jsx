import { Bounce, ToastContainer } from 'react-toastify';
import Header from '../Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollRestoration />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Home;