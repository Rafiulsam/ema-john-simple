import Header from '../Header/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <ScrollRestoration/>
        </div>
    );
};

export default Home;