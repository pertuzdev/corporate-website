import styled from "styled-components";

import tw from "twin.macro";

import { Text } from "components/elements/texts.styles";
import { colors } from "styles/colors";

export const ContactInfoWrapper = styled.div`
  ${tw`pt-8 pb-10`}
`;

export const ContactInfoItem = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: ${colors["primary-purple"]};
  cursor: ${({ pointer }) => pointer && pointer};
`;

export const ContactInfoText = styled(Text)`
  margin: 0;
  margin-left: 1rem;
`;
