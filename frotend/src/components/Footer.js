import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinkItems>
                <FooterDesc>
                    <h1>Omida spatiala</h1>
                    <p>We strive to create the best art experience for our customers!</p> 
                </FooterDesc>
                    <FooterLinkTitle>Contact us: +40767978712, art_experience@omida.com</FooterLinkTitle>
                    </FooterLinkItems>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1100px) / 2);
    color: #000;
    background: #fafafb;
`
const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.div`
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 30px;
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`