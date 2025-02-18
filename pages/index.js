import Header from '../components/header';
import FAQ from '../components/faq';
import TopRatedFreelancers from '@/components/toprated';
import HeroSection from '@/components/hero';
import PopularCategories from '../components/categories';

const Home = () => {
  return (
    <div>
      <Header />

      <HeroSection />

      <PopularCategories />

      <TopRatedFreelancers />

      <FAQ />
    </div>
  );
};

export default Home;