import styled from 'styled-components'
import tw from 'twin.macro'

import { Button, Container, Colors } from 'styles/globalStyles'

export const ProfileContainer = styled.div`
  ${tw`pt-10 pb-20 px-0`};
  background-color: ${Colors['lighter-white']};
`
export const ProfileWrapper = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 120px;
  padding-left: 120px;
  @media screen and (max-width: 1280px) {
    padding-right: 80px;
    padding-left: 80px;
  }
  @media screen and (max-width: 994px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }

`
export const ProfileRow = styled.div`
  ${tw`flex flex-col`};
  width: 100%;
  align-items: ${({ alignStart }) => alignStart ? 'flex-start' : 'flex-end'};
  justify-content: ${({ justifyContent }) => justifyContent};
  max-width: ${({ maxWidth450 }) => maxWidth450 && '450px'};
  @media screen and (max-width: 994px) {
    max-width: ${({ maxWidth550 }) => maxWidth550 && '650px'};
    align-items: ${({ center }) => center && 'center'};
    text-align: ${({ center }) => center && 'center'}
  }

`
export const ProfilePrinciples = styled.ul`
  ${tw`flex`};
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 4rem;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileSocialIconLinks = styled.li`
  ${tw`text-gray-500 text-2xl mr-4`}
`
export const ProfileTextWrapper = styled.div`
  
`
export const ProfileTitle = styled.h1`
  ${tw`font-bold font-inter`};
  font-size: 3.5rem;
  line-height: 1.1;
  letter-spacing: -3.5px;
  margin-bottom: 50px;
  @media screen and (max-width: 994px) {
    font-size: 3rem;
    letter-spacing: 0;
  }
  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }
`
export const ProfileHighlight = styled.span`
  color: ${Colors['primary-purple']}
`
export const ProfileSubTitle = styled.p`
  ${tw`text-gray-900 mt-4`};
  font-size: 20px;
  font-weight: 500;
  opacity: 0.9;
  @media screen and (max-width: 994px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
export const CoverScrollDown = styled.p`
  transform: rotate(90deg);
  @media screen and (max-width: 1024px) {
    display: none;
  }

`
export const ProfileButton = styled(Button)`
  ${tw`mt-3 md:mt-12`}
`
export const ProfileImgWrapper = styled.div`
  max-width: 455px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`
export const ProfileImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 455px;
`
export const PrincipleItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  margin-right: 10px;
  align-items: center;
  padding: 15px 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 13px rgb(214 215 216 / 57%);
  transition: all .2s ease-in;
  :hover {
    background-color: ${Colors['primary-purple']};
    color: white;
  }
  @media screen and (max-width: 640px) {
    flex-basis: 70%;
    width: 70%;
    margin-bottom: 10px;
    background-color: ${Colors['primary-purple']};
    color: white;
    margin-right: 0;
  }
`
export const PrincipleText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`
