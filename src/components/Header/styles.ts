import { styled } from "@mui/material";

export const Header = styled("header")`
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;
