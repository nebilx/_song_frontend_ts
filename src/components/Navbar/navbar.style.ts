import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { BarProp } from "../../type";
export const Container = styled.div`
  width: 85%;
  max-width: 1280px;
  margin: 0 auto;
  height: 150px;
  min-height: 100%;
  @media (max-width: 1100px) {
    height: 100%;
  }
  @media (max-width: 970px) {
    width: 90%;
  }
`;

export const Content = styled.div<BarProp>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #0000009e;
    z-index: 1;
    display: ${(props) => (props.bar ? "block" : "none")};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

export const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    height: 2px;
    transform: scale(0);
    transform-origin: right;
    transition: transform 400ms ease-in-out;
  }
  :hover {
    opacity: 0.7;
  }
  :hover:before {
    transform: scale(1);
    transform-origin: left;
  }
`;

export const Nav = styled.nav<BarProp>`
  background-color: gray;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    background-color: #595959;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: ${(props) => (props.bar ? "90px" : "-20rem")};
    padding: ${(props) => (props.bar ? "1rem 0" : "0")};
    left: 5%;
    right: 5%;
    transition: all 400ms ease-in-out;
  }
  z-index: 10000;
`;

export const Bar = styled.div<BarProp>`
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: none;
  z-index: 100;
  @media (max-width: 650px) {
    display: flex;
  }
  span {
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: ${(props) => (props.bar ? "transparent" : `#fff`)};
    border-radius: 5px;
    transition: all 400ms ease-in-out;
    :before,
    :after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #fff;
      border-radius: 5px;
    }
    :before {
      transform: ${(props) =>
				props.bar ? `rotate(-45deg)` : `translateY(8px)`};
      transition: all 400ms ease-in-out;
    }
    :after {
      transform: ${(props) =>
				props.bar ? `rotate(45deg)` : `translateY(-8px)`};
      transition: all 400ms ease-in-out;
    }
  }
`;
