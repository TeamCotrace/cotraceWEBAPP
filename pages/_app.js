import { ChakraProvider} from "@chakra-ui/react"
import Layout from "../layout";
// import '../styles/globals.css'
// import '../styles/Marker.css';
// import '../styles/newmarker.css';



function MyApp({ Component, pageProps }) {

  return (
 <ChakraProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
     
    </ChakraProvider>
   
 
  )
 

}

export default MyApp
