import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title="Model 3"
            description="Leasing starting at $349/month"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Demo Drive"
        />
        <Section
            title="Model Y"
            description=""
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Demo Drive"
        />
        <Section
            title="Model S"
            description="Schedule a Demo Drive"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Model X"
            description="Schedule a Demo Drive"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
        <Section
            title="Solar Panels"
            description="Lowest Cost Solar Panles in INDIA"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Solar Roofs"
            description="Produce Clean Energy from your Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
        />
        <Section
            title="Accessories - Clone Made by SBK"
            description="Money-back Guarantee"
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`