import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  form {
    width: 100%;
    .title_login {
      h2 {
        color: #222222;
        font-weight: 500;
        font-size: 24px;
        font-feature-settings: "liga" off;
        line-height: 125%;
      }
    }
  }
  @media (min-width: 700px) {
    width: 26vw;
    form {
      .title_login {
        h2 {
          color: #222222;
          font-weight: 500;
          font-size: 24px;
          font-feature-settings: "liga" off;
          line-height: 125%;
          margin-top: 30px;
        }
      }
    }
  }
`;

export { Content };
