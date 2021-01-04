import React from 'react'
import {FiPlayCircle} from 'react-icons/fi'
import {
  ProductSlider,
  ProductContainer,
  ProductWrapper,
  Producth3,
  Producth1,
  ButtonContainer,
  Button,
  ProductImg,
} from './style';

const Slider = () => {
    return (
      <>
      <ProductSlider>
        <ProductImg src='/SLIDER_2500x.jpg'/>
          <ProductContainer>
            <ProductWrapper>
              <Producth3>Origin line 2021</Producth3>
              <Producth1>MADE FOR HARD ENDURO</Producth1>
              <ButtonContainer>
                <Button><FiPlayCircle/>  LAUCH MOVİE</Button>
                <Button>GIVE A GIFT NOW</Button>
              </ButtonContainer>
            </ProductWrapper>
          </ProductContainer>
        </ProductSlider>
        </>
    )
}

export default Slider
