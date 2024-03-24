import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-slate-50 h-screen">
      <Container>
        <Header />
        <Hero />
      </Container>
    </main>
  );
}
