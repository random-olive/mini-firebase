import { LoginPageStyle } from "../ZStyles/PageStyles";
import { GoogleIcon, LoginIcon } from "../Constants/icons";
import { useState} from "react";
import LoginBox from "../Molecules/LoginBox";
import LinkBtns from "../Atoms/LinkBtns";
import styled from "styled-components";
import { socialLogin } from "../Organisms/FirebaseO";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/slices/userSlice";

const LoginPage = ({ setIsLoggedIn, setLogout }) => {
  const userState = useSelector((state) => state.user);

  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin1 = () => {
    setAdmin(true);
  };

  const handleLogin2 = async () => {
    setAdmin(false);
    await socialLogin()
      .then(
        (res) =>
          dispatch(
            getUser({
              list: res,
            })
          )
        // console.log(res)
      )

      .then((res) => navigate("/"));
  };

  return (
    <>
      <LoginPageStyle>
        <div>
          <div
            onClick={() => {
              handleLogin1();
            }}
          >
            <button name="admin">
              관리자 <LoginIcon size={25} />
            </button>
          </div>
          <div
            onClick={() => {
              handleLogin2();
            }}
          >
            <button name="google">
              <GoogleIcon size={25} />
            </button>
          </div>
        </div>
        {admin ? <LoginBox /> : ""}
        <div className="login">
          <LinkBtns
          margin={'3px 0 0 0 '}
            content={userState.list.length === 0 ? "로그인" : "로그아웃"}
          />
        </div>
      </LoginPageStyle>
      <Block>
        <p>관리자 계정이 없다면?</p>
        <LinkBtns content={"회원가입"} width="25%" margin="30px 0 30px 0" />
      </Block>
    </>
  );
};

export default LoginPage;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

  @media screen and (max-width: 588px) {
    width: 90%;
  }
`;
