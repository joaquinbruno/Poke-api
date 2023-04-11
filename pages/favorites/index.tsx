import { Layout } from "@/components/layout"
import FavoritePokemons from "@/components/pokemon/FavoritePokemons";
import NoFavorites from "@/components/ui/NoFavorites"
import { localFavorites } from "@/utils";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react"
import { useState, useEffect } from 'react';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
  setfavoritePokemons( localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0 
          ? (<NoFavorites/>) 
          : (<FavoritePokemons pokemons={favoritePokemons}/>)
      }
    </Layout>
  )
}

export default FavoritesPage

            
      
