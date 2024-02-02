import styled from "@emotion/styled";
export const Container = styled.div`
  background-color: #474747;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 500px;
  margin: auto;
  padding: 5%;
`;

export const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  background: gray;
  border: none;
  border-radius: 5px;
  width: 100%;
  color: white;
  ::placeholder {
    color: white;
  }
`;

export const Select = styled.select`
  background: gray;
  color: white;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 100%;
  color: white;
`;

export const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  width: 50%;
`;
export const Head = styled.h1`
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
  margin-left: 20px;
  color: white;
`;
