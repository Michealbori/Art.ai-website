import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Nav2 from './components/nav2/Nav2';
import TrendingArt from './components/trendingArt/Trendingart';
import GalleryF from './components/firstGallery/Gallery';
import GalleryS from './components/secondGallery/Gallery';
import Combination from './components/combination/Combination';
import BestsellerList from './components/bestsellerProduct/Bestseller';
import BestSeller from './components/bestSeller/BestSeller';
import Client from './components/happyClient/Client';
import Newsletter from './components/newsLetter/Newsletter';
import Footer from './components/footer/Footer';




export default function App()
{
  return(
    <div className="App">
       <Header />
       <Hero />
       <Nav2 />
       <TrendingArt />
       <GalleryF />
       <GalleryS />
       <Combination />
       <BestSeller />
       <BestsellerList />
       <Client />
       <Newsletter />
       <Footer />
    </div>
  )
}
