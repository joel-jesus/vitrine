import styled from "styled-components";

const Containertopo = styled.header`
  background-color: #5f12b6;
  border-top: 28px solid #450887;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 7vh;
  padding: 10px 0;
  width: 100%;
  img {
    width: 80%;
    @media (min-width: 700px) {
      width: 36.41px;
    }
  }
`;

const Topo = styled.header`
  width: 100%;
`;

const Containerlogo = styled.div`
  background-color: #5f12b6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 7vh;
  padding: 10px 0;
  width: 100%;
  img {
    width: 80%;
    @media (min-width: 700px) {
      width: 36.41px;
    }
  }
`;

const Listtopo = styled.div`
  background-color: #450887;
  ul {
    display: flex;
    margin: 0 auto;
    width: 90%;
    a {
      color: #9d85c1;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin: 0 10px;
      padding: 8px 0;
      &:last-child {
        color: #ffffff;
      }
    }
  }
`;
const Containerwhite = styled.header`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  ul {
    display: flex;
    margin: 0 auto;
    width: 90%;
    a {
      color: #b5b5b5;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin: 0 10px;
      padding: 8px 0;
      &:last-child {
        color: #333;
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0 10px 0;
  width: 88%;
  h2 {
    color: #000000;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-left: 8px;
  }
  img {
    width: 20.81px;
  }
`;

export { Containertopo, Containerlogo, Containerwhite, Listtopo, Topo, Title };
