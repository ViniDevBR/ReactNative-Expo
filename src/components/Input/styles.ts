import styled from "styled-components/native";

export const InputContainer = styled.View`
  background-color: ${props => props.theme.COLORS.BACKGROUND2};
  width: 100%;
  padding: 17px 20px ;
  margin-bottom: 18px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${props => props.theme.COLORS.BORDER2};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

