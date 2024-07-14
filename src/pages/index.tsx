import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Next.js Hello World</h1>
      <Link href="/search_cep">Buscar CEP</Link>
    </main>
  );
}

export default Home;