import Articles from './components/Articles';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Lifestyle from './components/Lifestyle';
import MainBody from './components/MainBody';
import Navigation from './components/Navigation';
import Newsletter from './components/Newsletter';
import Politics from './components/Politics';
import PoliticsComponent from './components/PoliticsComponent';
import SingleContainer from './components/SingleContainer';
import Sports from './components/Sports';
import Technology from './components/Technology';
import Travel from './components/Travel';
import './index.css'; 
import 'remixicon/fonts/remixicon.css';

function App() {
 

  return (
    <>
      {/* <Header />
      <Navigation />
      <MainBody />
      <SingleContainer />
      <Newsletter />
      <Articles /> */}
      {/* <SingleContainer /> */}
      <Header />
      <Home />
      <Technology />
      <Sports />
      {/* <Newsletter /> */}
      <Travel />
      <Politics />
      <PoliticsComponent />
      <Lifestyle />
      <Footer />
    </>
  )
}

export default App
