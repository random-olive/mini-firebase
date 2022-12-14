import styled from "styled-components";

export const PageBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

export const MainPageStyle = styled(PageBase)`
  width: 50%;
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 70%;
    }
    margin-bottom: 70px;
  }

  .title--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .test--boxes {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 588px) {
    width: 90%;

    .test--boxes {
      margin-top: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
`;

export const LoginPageStyle = styled(PageBase)`
  background-color: var(--msg100);
  align-items: center;
  border-radius: 10px;
  width: 25%;
  box-shadow: 1px 1px 1px var(--shadow100);

  div {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    button {
      display: flex;
      cursor: pointer;
      align-items: center;
      background: transparent;
    }
    div:nth-child(1),
    div:nth-child(2) {
      cursor: pointer;
      height: 50px;
      border-radius: 7px;
      border: 1px solid var(--gray100);
      :hover {
        background: var(--orange100);
        border-radius: 7px;
      }
    }
  }
  .login {
    cursor: pointer;
    border-radius: 7px;
    :hover {
      background: var(--green100);
    }
  }

  @media screen and (max-width: 588px) {
    width: 70%;
  }
`;

export const BoardPageStyle = styled(PageBase)`
  width: 50%;
  align-items: center;
  a {
    color: var(--font200);
  }
  .btn--wrapper {
    display: flex;
    width: 100%;
    padding: 0 0 10px 0;
    justify-content: right;
  }
  @media screen and (max-width: 588px) {
    width: 90%;
  }
`;

export const PostPageStyle = styled(BoardPageStyle)`
  margin-top: 100px;
  width: 600px;
  background: var(--orange100);
  padding: 20px;
  .first {
    display: flex;
    align-items: center;
    width: 90%;

    div:nth-child(1) {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .icon {
      margin-right: 10px;
    }
  }
  div {
    display: flex;
    margin-bottom: 20px;
    div:nth-child(2) {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 588px) {
    width: 90%;
  }
`;

export const DetailPageStyle = styled(BoardPageStyle)`
  margin-bottom: 30px;
  background: var(--msg100);
  padding: 30px;
  font-weight: bold;
  color: var(--font100);
  .icons {
    display: flex;
    width: 100%;
    justify-content: right;
    a {
      color: var(--font100);
    }
    font-size: 1.2rem;

    margin-right: 15px;
  }
  .title {
    display: flex;
    width: 100%;
    color: var(--red100);
    font-size: 2rem;
    margin-top: 10px;
  }
  .wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: var(--orange500);
    margin-top: 10px;
  }
  .body {
    width: 100%;
    color: var(--font100);
    margin-top: 30px;
  }
`;

export const FeaturePageStyle = styled(PageBase)`
  width: 50%;
  .img--wrapper {
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--font200);
      margin-bottom: 30px;
    }
  }
  .btn--wrapper {
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
    background-color: var(--orange200);
    border-radius: 10px;
    margin-bottom: 70px;
    button {
      margin: 10px;
      border-radius: 5px;
    }
  }
  a {
    color: var(--font200);
  }

  .img--wrapper {
    margin-bottom: 70px;
    .imgs {
      display: flex;
      flex-direction: column;
    }
  }
  .desc--wrapper {
    background: var(--orange150);
    border-radius: 10px;
    padding: 20px;
    margin: 5px 0 50px 0;  }

  @media screen and (max-width: 588px) {
    width: 90%;
  }
`;
