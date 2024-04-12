import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import { server } from '../main'
import { Container, HStack } from '@chakra-ui/react'
import Loader from './Loader'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import CoinCard from './CoinCard'
import ErrorComponent from './ErrorComponent'
import { RadioGroup, Radio } from '@chakra-ui/react'
import ReactPaginate from 'react-paginate';
import './coins.css'


const Coins = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";




  const handlePageClick = (e) => {
    setLoading(true);
    setPage(e.selected+1);
  }
  const handlePrev = () => {
    setLoading(true);
    page!=1?setPage(page-1):setPage(page);
  }
  const handleNext = () => {
    setLoading(true);
    page!=132?setPage(page+1):setPage(page);
  }





  useEffect(() => {
    const coins = async () => {
      try {
        // const {data}  = await axios.get(`http://localhost:3000/?server=${server}&currency=${currency}&page=${page}`);
        const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoin(data);
        console.log(data)
        setLoading(false);
      } catch (err) {
        setLoading(false);
        seterror(true);
      }

    }
    coins();

  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />

  return (
    <Container maxW={"container.xl"} h={"90vh"} >
      {loading ? <Loader /> : <>
        
        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack m={"8"} spacing={"4"}>
            <Radio value={"inr"} >INR</Radio>
            <Radio value={"usd"} >USD</Radio>
            <Radio value={"eur"} >EUR</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            coin.map(item => (
              <CoinCard key={item.id} name={item.name} img={item.image} id={item.id} price={item.current_price} symbol={item.symbol} currencySymbol={currencySymbol} />
            ))
          }
        </HStack>

        <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: '100%',
        margin:'auto',
        height: '15%',
      }}
    >

      <ReactPaginate
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={4}
        nextClassName={"item next "}
        nextLabel={<IoIosArrowForward onClick={()=>handleNext()} style={{ fontSize: 18, width: 150 }} />}
        onPageChange={(e) => handlePageClick(e)}
        pageCount={132}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={<IoIosArrowRoundBack onClick={()=>handlePrev()} style={{ fontSize: 18, width: 150 }} />}
      />
       
    </div>

      </>
      }
    </Container>
  )
  
};




export default Coins
