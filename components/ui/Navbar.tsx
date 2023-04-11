import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from 'next/link'
export const Navbar = () => {
  
  const {theme} = useTheme()
  
    return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        background: theme?.colors.gray800.value,
    }}>
        
        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="icono de la app"
            width={100}
            height={100}
        />

        <NextLink href="/" passHref>

          
          <Text color='white' h3>Pokémon</Text>
          
          
        </NextLink>


        <Spacer css={{flex: 1}}/>


          <NextLink href="/favorites" passHref>
              <Text color='white' >Favoritos</Text>
          </NextLink>
            
    </div>
  )
}

export default Navbar