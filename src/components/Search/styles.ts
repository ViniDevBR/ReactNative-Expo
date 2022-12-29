import styled from 'styled-components/native'

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  padding: 3px 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_700};
  border-radius: 6px;
`
