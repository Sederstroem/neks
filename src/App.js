import './styles/styles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div>
      <Header />
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
