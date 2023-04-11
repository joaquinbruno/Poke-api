import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"


type PropsLayout = {
  children?: ReactNode | undefined,
  title: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<PropsLayout> = ({ children, title }) => {

  
  return(
    <>
      <Head>
        <title>{ title || 'PokemonApp'}</title>
        <meta name="author" content="Joaco Bruno"/>
        <meta name="description" content={`Información sobre el pokémon ${title}`}/>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar/>

      <main style={{
        padding: '0px 20px'
      }}>
        { children}
      </main>
    </>
  )
}


