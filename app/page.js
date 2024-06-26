import Container from "./components/Container";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsGallary from "./components/ProductsGallary";
import Search from "./components/Search";

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Hero />
        <Search />
        <ProductsGallary />
        <FAQ />
      </main>
      <Footer />
    </Container>
  );
}
