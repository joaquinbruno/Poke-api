import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

const NoFavorites = () => {
  return (
    <div>
           <Container css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
        
      }}>
        <Text h1> No hay Favoritos</Text>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
          alt="Ditto"
          width={250}
          height={250}
          css={{
            opacity: 0.1
          }}
        />
      </Container>
    </div>
  )
}

export default NoFavorites