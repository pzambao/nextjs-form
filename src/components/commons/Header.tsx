import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image 
          src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg" 
          width={55} 
          height={55} 
          alt="Clica para voltar para o início"
        />
      </Link>
      <nav>
        <Link href="/search_cep">BuscarCEP</Link>
      </nav>
    </header>
  );
};