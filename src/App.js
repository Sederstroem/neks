import './styles/styles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <div>
      <Header />
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <Footer/>
    </div>
  );
}

export default App;
