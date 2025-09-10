import { Helmet } from 'react-helmet-async';
import Hero from '../../Components/Home/Hero/Hero';

const Home = () => {
    
    return (
      <>
        <Helmet>
          <title>Home || Grocify</title>
        </Helmet>

        <Hero />
        
      </>
    );
};

export default Home;