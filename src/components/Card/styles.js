import { Card, styled } from "@mui/material";

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(4)};
`;
