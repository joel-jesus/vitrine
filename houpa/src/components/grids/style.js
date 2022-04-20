import styled from "styled-components";
//Medias Queryes
import { device } from "../../breakpoints/style";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:after {
    content: "";
    clear: both;
    display: table;
  }
  @media ${device.tablet} {
    flex-direction: row;
    min-height: 8vh;
  }
`;
const getColumn = (valueGrid) => {
  if (!valueGrid) return;
  const width = (valueGrid / 12) * 100;
  return `width: ${width}%;`;
};

const Col = styled.div`
  padding: 0.25rem;
  @media ${device.tablet} {
    ${({ Desk }) => Desk && getColumn(Desk)}
  }
`;
