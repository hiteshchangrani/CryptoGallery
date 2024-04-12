import React from 'react'
import Loader from './Loader'
import Chart from './Chart'
import ErrorComponent from './ErrorComponent'
import {server} from '../main'
import {Container, Box, RadioGroup, Radio, HStack, VStack, Text, Image,Stat, StatNumber, StatLabel, StatHelpText, StatArrow, Badge,
Progress, Button} from '@chakra-ui/react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const CoinDetails = () => {

  const params= useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("1d");
  const [chartArray, setChartArray] = useState([]);
  
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  
  const btns=[1,7,14,30,100,365];
  
  const switchChartStats=(key)=>{
    console.log(key);
    setDays(key);
    setLoading(true);
  }

  useEffect(() => {
    const coins = async () => {
      try {
        // const {data}  = await axios.get(`http://localhost:3000/?server=${server}&currency=${currency}&page=${page}`);
        // const {chartData}  = await axios.get(`http://localhost:3000/chart/?server=${server}&id=${params.id}&currency=${currency}&days=${days}`);


        const {data}= await axios.get(`${server}/coins/${params.id}`);
        const {data: chartData}= await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);

        console.log(chartData)
        setChartArray(chartData.prices);
        setCoin(data);
        console.log(data)
        setLoading(false);
      } catch (err) {
        setLoading(false);
        seterror(true);
      }

    }
    coins();

  }, [params.id,currency, days]);






  if (error) return <ErrorComponent message={"Error While Fetching Coin Details"} />

  return (
    <Container maxW={"container.xl"}>
       {loading?<Loader/>:<>
       

       <Box borderWidth={1} width={"full"} >
        <Chart currency={currencySymbol} arr={chartArray}/>
       </Box>

       <HStack p={"4"} wrap={"wrap"} justifyContent={"center"}>
          {btns.map(item=><Button key={item} onClick={()=>switchChartStats(item)} >{item}D</Button>
          )}
       </HStack>



       <RadioGroup value={currency} onChange={setCurrency}>
          <HStack m={"8"} spacing={"4"}>
            <Radio value={"inr"} >INR</Radio>
            <Radio value={"usd"} >USD</Radio>
            <Radio value={"eur"} >EUR</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing="4" p={"4"} alignItems={"flex-start"}>
          <Text fontSize="small" alignSelf={"center"} opacity={0.6}>
            Last Updated On {coin.market_data.last_updated}
          </Text>
          <Image src={coin.image.large} h={"16"} w={"16"} objectFit={"contain"} />

          <Stat>
            <StatLabel>{coin.name}</StatLabel>
            <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
            <StatHelpText>
              <StatArrow type={coin.market_data.price_change_percentage_24h<0?'decrease':'increase' }/>
              {coin.market_data.price_change_percentage_24h}%
            </StatHelpText>
          </Stat>

          <Badge fontSize={"2xl"} bgColor={"blackAlpha.800"} color={"white"}>{`# ${coin.market_cap_rank}`}</Badge>

          <CustomBar curr={`${coin.market_data.current_price[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} />


          <Box w={"full"}>
            <Item title={"Max Suppy"} value={coin.market_data.max_supply} />
            <Item title={"Circulating Supply"} value={coin.market_data.circulating_supply} />
            <Item title={"Markey Capital"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
            <Item title={"All Time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
            <Item title={"All Time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
          </Box>


        </VStack>


       </>}
    </Container>
  )
}

const CustomBar=({low,high,curr})=>(
  <VStack w={"full"}>
    <Progress w={"full"} colorScheme={'teal'} value={curr} />
    <HStack justifyContent={"space-between"} w={"full"} > 
      <Badge children={low} colorScheme='red' />
      <Text fontSize={"small"}  >24Hr Range</Text>
      <Badge children={high} colorScheme='green' />
    </HStack>
  </VStack>
);

const Item=({title,value})=>(
   <HStack justifyContent={"space-between"} w={"full"} my={"3"} >
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"} >{title}</Text>
    <Text>{value}</Text>
   </HStack>
);

export default CoinDetails
