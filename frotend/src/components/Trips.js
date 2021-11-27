import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import img1 from '../assets/images/museum-1.jpg'
import img2 from '../assets/images/museum-2.jpg'
import img3 from '../assets/images/museum-3.jpg'
import {Button } from './Button'
import {ImLocation } from "react-icons/im"

const images = [
    {
        img: img1,
        name: 'museum1',
        alt: "Louvre Museum",
        button: "View Paintings"
    },
    {
        img: img2,
        name: 'museum2',
        alt: "Louvre2",
        button: "View Paintings"
    },
    {
        img: img3,
        name: 'museum3',
        alt: "Lovre3",
        button: "View Paintings"
    }
]

const Trips = ({Heading}) => {
    function getTrips(images) {

        const tripsArray =[]
        images.map((item) => {
            tripsArray.push(
                <ProductCard>
                    <ProductImg src={item.img}/>
                    <ProductInfo>
                        <TextWrap>
                            <ImLocation />
                            <ProductTitle>
                                {item.name}
                            </ProductTitle>
                        </TextWrap>
                        <Button to="/museums-search" primary="true" round="true"
                        css={`
                        position: absolute;
                        top: 420px;
                        font-size: 14px;
                        `}>{item.button}</Button>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return tripsArray
    }
    return (
        <ProductAll>
        <ProductsHeading>
        {Heading}
        </ProductsHeading>
       <ProductsContainer>
           <ProductsWrapper>
               {getTrips(images)}
           </ProductsWrapper>
       </ProductsContainer>
       </ProductAll>
    )
}

export default Trips
const ProductAll = styled.div`
    display: flex;
    flex-direction: column;
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
    top: 375px;
`
const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`
