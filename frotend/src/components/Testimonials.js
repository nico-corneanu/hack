import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'

const Testimonials = () => {
    return (
       <TestimonialsContainer>
           <TopLine>
               Testimonials
           </TopLine>
           <Description>
               What people are saying
           </Description>
           <ContentWrapper>
               <ColumnOne>
                <Testimonial>
                    <IoMdCheckmarkCircleOutline />
                    <h3>Sean Michaels</h3>
                    <p> The greatest website for discovering museums and art!</p>
                </Testimonial>
                <Testimonial>
                    <h3>Aurelia Mihaela</h3>
                    <p> The greatest website for discovering museums and art!</p>
                </Testimonial>
                <Testimonial>
                    <FaRegLightbulb/>
                    <h3>Emily Smith</h3>
                    <p> The greatest website for discovering museums and art!</p>
                </Testimonial>
               </ColumnOne>
               <ColumnTwo>
                    image
               </ColumnTwo>
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
const TopLine = styled.div``
const Description = styled.div``
const ContentWrapper = styled.div``
const ColumnOne = styled.div``
const Testimonial = styled.div``
const ColumnTwo = styled.div``
