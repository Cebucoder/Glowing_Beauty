// import logo from './logo.svg';
// import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
// import Product from "./components/product";
import Proddetails from "./components/product-details";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
      {/* <Product></Product> */}
      <Proddetails></Proddetails>
      <Footer></Footer>
    </div>
  );
}

export default App;
