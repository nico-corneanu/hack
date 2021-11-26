import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import img1 from '../assets/images/human-1.jpg'
import img2 from '../assets/images/human-2.jpg'
import img3 from '../assets/images/human-3.jpg'
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

function getTrips(images) {

    const humansArray =[]
    images.map((item) => {
        humansArray.push(
            <Images src={item.img}/>
        )
    })
    return humansArray
}

const Testimonials = () => {
    return (
       <TestimonialsContainer>
           <Description>
               What people are saying
           </Description>
           <ContentWrapper>
               <ColumnOne>
                <Testimonial>
                    <FaRegLightbulb/>
                    <h3>Sean Michaels</h3>
                    <p> The greatest website for discovering museums and art!</p>
                   
                    <img src={img1} css={`
                      height: 500px;
                      width: 333px;
                      position: relative;
                      border-radius: 10px;
                      filter: brightness(70%);
                      transition: 0.4s cubic-bezier(0.0075, 0.82, 0.165, 1);
                  
                      &:hover {
                          filter: brightness(100%);
                      }`}/>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb/>
                    <h3>Aurelia Mihaela</h3>
                    <p> The greatest website for discovering museums and art!</p>
        
                    <img src={img2} css={`
                      height: 500px;
                      width: 333px;
                      position: relative;
                      border-radius: 10px;
                      filter: brightness(70%);
                      transition: 0.4s cubic-bezier(0.0075, 0.82, 0.165, 1);
                  
                      &:hover {
                          filter: brightness(100%);
                      }`}/>
                    
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb/>
                    <h3>Emily Smith</h3>
                    <p> The greatest website for discovering museums and art!</p>
                
                    <img src={img3} css={`
                       height: 500px;
                       width: 333px;
                       position: relative;
                       border-radius: 10px;
                       filter: brightness(70%);
                       transition: 0.4s cubic-bezier(0.0075, 0.82, 0.165, 1);
                   
                       &:hover {
                           filter: brightness(100%);
                       }`}/>
                </Testimonial>
               </ColumnOne>
              
           </ContentWrapper>
       </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
width: 100%;
background: #fcfcfc;
color: #000;
padding: 5rem calc((100vw - 1300px) / 2);
height: 100%;
`
const TopLine = styled.p`
text-align: start;
padding-left: 2rem;
font-size: clamp(1.5rem, 5vw, 2rem);
font-weight: bold;
`
const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 6rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`
const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 0 2rem;

@media screen and (max-width:768px) {
    grid-template-columns: 1fr;
}
`
const ColumnOne = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    justify-items: center;

    @media screen and (max-width:1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:868px) {
        grid-template-columns: 1fr;
    }
`
const Testimonial = styled.div`

h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
}

p {
    color: #3b3b3b;
    margin-bottom: 15px;
}
`
const Images = styled.img`
border-radius: 10px;
height: 100%;
`