import Header from '../app/components/Header/Header'
import Main from '../app/components/Main/Main'
import SellerArea from '../app/components/SellerArea/SellerArea'
import HotBidsArea from '../app/components/HotBidsArea/HotBidsArea'
import Footer from '../app/components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SellerArea />
      <HotBidsArea />
      <Footer />
    </div>
  );
}

export default App;
