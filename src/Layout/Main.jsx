import {Outlet} from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
const Main = () => {
    return (
      <div>
        <Navbar />
        <div className="max-w-[1440px] mx-auto px-10 ">
          <Outlet />
        </div>

        <Footer />
      </div>
    );
};

export default Main;