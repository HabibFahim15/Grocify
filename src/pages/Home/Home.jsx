import { Helmet } from 'react-helmet-async';
import Hero from '../../Components/Home/Hero/Hero';
import Category from '../../Components/Home/Category/Category';

const Home = () => {
    
    return (
      <>
        <Helmet>
          <title>Home || Grocify</title>
        </Helmet>

        <Hero />
        <Category />
        
      </>
    );
};

export default Home;