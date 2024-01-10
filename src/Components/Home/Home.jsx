import { Helmet } from 'react-helmet-async';
import Navbar from './../Navbar/Navbar';
import Banner from '../Banner/Banner';
import { useEffect, useState } from 'react';
import Preloading from './../Preloading/Preloading';
import FeaturedProducts from '../AllProducts/FeaturedProducts/FeaturedProducts';
import Footer from '../Footer/Footer';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [setIsLoading])
    return (
        <div>
            {
                isLoading ? <Preloading></Preloading> : 
                <div>
            <Helmet>
              <title>Beyond Bazar | Home</title>
          </Helmet>
          <HeaderInfo></HeaderInfo>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Footer></Footer>
        </div>
            }
        </div>
    );
};

export default Home;