import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Trips = ({Heading, paintings}) => {



    return (

        <ProductAll>
        {
          paintings == null ? <></> : <>
        <ProductsHeading>
        {Heading}
        </ProductsHeading>
       <ProductsContainer>
           <ProductsWrapper>
               {paintings.map((item) => (

                       <ProductCard>
                           <ProductImg src={item.image}/>
                           <ProductInfo>
                               <TextWrap>

                                   <ProductTitle>
                                      <h3>{item.author}</h3>
                                       {item.title}
                                   </ProductTitle>
                               </TextWrap>
                           </ProductInfo>
                       </ProductCard>))}
        </ProductsWrapper>
       </ProductsContainer>
       </>
      }
       </ProductAll>)

}

export default Trips
const ProductAll = styled.div`
    display: flex;
    flex-direction: column;
    background-image:
`
const ProductsContainer = styled.div`
    min-height: 50vh;
    background: transparent;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    color: #000;
    padding-top:5vh;
    padding-bottom:5vh;
`

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width:1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:868px) {
        grid-template-columns: 1fr;
    }
`

const ProductCard = styled.div`
    line-height: 2;
    height: 500px;
    width: 333px;
    position: relative;
    border-radius: 10px;
    transition: 0.2 ease;
    justify-content: flex-start;
`

const ProductImg = styled.img`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.0075, 0.82, 0.165, 1);

    &:hover {

        filter: brightness(100%);
    }
`
const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width:280px) {
        padding: 0 1rem;
    }
`
const TextWrap = styled.div`
    display: flex;
    alin-items: center;

    position: absolute;
    top: 340px;
`
const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`
