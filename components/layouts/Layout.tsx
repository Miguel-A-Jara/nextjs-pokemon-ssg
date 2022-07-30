import { FC } from "react";
import Head from "next/head";

import { Navbar } from '../ui/index';

interface ILayout {
  children: JSX.Element;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout: FC<ILayout> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Miguel Jara" />
        <meta name="description" content={`Información sobre el pokémon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/pokemon-banner.png`} />
      </Head> 

      {/* Navbar */}
      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>

    </>
  )
}

export default Layout;