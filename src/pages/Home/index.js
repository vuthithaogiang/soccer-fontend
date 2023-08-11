import HomeBanner from './Banner/Banner';
import HomeContent from './Content';
import Recommend from './Recommend';
import Introduction from './Introduction';
import NewLastest from './NewLastest';
import Matches from './Matches';
import ProductNewArrival from './ProductNewArrival';
import Player from './Player';
import ContactUs from './ContactUs';

function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-20 pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <Introduction />
      <NewLastest />
      <Matches />
      <ProductNewArrival />
      <Player />
      <ContactUs />
      <HomeBanner />
      <HomeContent />
      <Recommend />
    </div>
  );
}

export default Home;
