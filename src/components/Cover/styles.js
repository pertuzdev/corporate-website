import styled from 'styled-components'
import tw from 'twin.macro'

import { Button, Container, Colors } from '../../styles/globalStyles'

export const CoverContainer = styled.div`
  ${tw`py-20 px-0`};
  background-color: ${Colors['lighter-white']};
  background-image: url("");
`
export const CoverWrapper = styled(Container)`
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
export const CoverRow = styled.div`
  ${tw`flex flex-col`};
  width: 100%;
  align-items: ${({ flexStart }) => flexStart ? 'flex-start' : 'flex-end'};;
  max-width: ${({ maxWidth450 }) => maxWidth450 && '450px'};
  @media screen and (max-width: 994px) {
    max-width: ${({ maxWidth550 }) => maxWidth550 && '650px'};
    align-items: ${({ center }) => center && 'center'};
    text-align: ${({ center }) => center && 'center'}
  }

`
export const CoverSocialMedia = styled.ul`
  ${tw`flex`};
  justify-content: flex-end;
  align-items: center;
  margin-top: 7rem;
  margin-right: 120px;

  ::before {
    content: '';
    width: 100%;
    height: 1px;
    background: #e3e2ef;
    margin-right: 40px;
  }

  @media screen and (max-width: 994px) {
    ::before {
      display: none;
    }

    justify-content: center;
    margin-top: 2rem;
    margin-right: 0;
  }

`
export const SocialIconLink = styled.li`
  ${tw`text-gray-500 text-2xl mr-4`}
`
export const TextWrapper = styled.div`
  ${tw`mt-4`};
`
export const CoverTitle = styled.h1`
  ${tw`font-bold font-inter`};
  font-size: 5rem;
  line-height: 1.1;
  letter-spacing: -3.5px;
  @media screen and (max-width: 994px) {
    font-size: 4rem;
    letter-spacing: 0;
  }
  @media screen and (max-width: 640px) {
    font-size: 3rem;
  }
`
export const Highlight = styled.span`
  ${tw`text-primary-purple`}
`
export const CoverSubTitle = styled.p`
  ${tw`text-gray-500 mt-4`};
  font-size: 24px;
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
export const CoverButton = styled(Button)`
  ${tw`mt-3 md:mt-12`}
`
export const CoverImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`
export const CoverImg = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 555px;
`
