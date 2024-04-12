import axios  from 'axios'
import React, { useEffect,useState } from 'react'
import { server } from '../main'
import { Container } from '@chakra-ui/react'
import Loader from './Loader'
import { HStack } from '@chakra-ui/react'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {

  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const exchanges= async()=>{
      try{
        const {data}=  await axios.get(`${server}/exchanges?per_page=250`); 
      setExchange(data);
      setLoading(false);
      }catch(err){
        setLoading(false);
        seterror(true);
      }
      
    }
    exchanges();
   
  }, [])
  
if(error) return <ErrorComponent message={"Error While Fetching Exchanges"} />

  return (
    <Container maxW={"container.xl"} h={"90vh"} >
      {loading?<Loader/>:<>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
          exchange.map(item=>(
             <ExchangeCard key={item.id} name={item.name} img={item.image} rank={item.trust_score_rank} url={item.url}/>
          )) 
          }
        </HStack>
      </>}
    </Container>
  )
};


export default Exchanges
