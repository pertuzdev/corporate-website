import styled from 'styled-components'
import { Colors } from '../../styles/globalStyles'


export const ServicesTitle = styled.h2`
  font-family: 'Inter',serif;
  font-size: 48px;
  text-align: center;
  font-weight: bold;
  color: ${Colors['secondary-blue']};
  margin-bottom: 64px;
  @media screen and (max-width: 640px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`
export const ServicesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  background-color: white;
  border-radius: 15px;
  padding: 25px 20px;
  flex: 1;
  max-width: 30%;
  flex-basis: 30%;
  margin: 20px auto;
  @media screen and (max-width: 1024px) {
    max-width: 40%;
    flex-basis: 40%;
  }
  @media screen and (max-width: 640px) {
    max-width: 100%;
    flex-basis: 100%;
    padding: 25px 50px;
  }
`
export const ServiceImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  width: 124px;
  height: 121.23px;
  @media screen and (max-width: 640px) {
    width: 104px;
    height: 101.23px;  
  }
`
export const ServiceItemTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 16px;
  color: #514e4e;
  text-align: center;
`
export const ServiceDescription = styled.p`
  font-size: 0.9rem;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
