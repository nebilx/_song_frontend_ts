import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: #808080;
  padding: 20px;
  border-radius: 20px;
  max-width: 300px;
  span {
    font-weight: bold;
    font-size: 25px;
    color: #ffffff;
  }
  h1 {
    font-weight: 700;
    font-size: 20px;
  }
  h2 {
    font-weight: 500;
    font-size: 15px;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
`;

export const Container = styled.div`
  background-color: #474747;
  padding: 5%;
  max-width: 900px;
  margin: auto;
  color: white;
  border-radius: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & > * {
    flex: 1;
    max-width: 200px;
    margin: 0px 20px;
    flex-wrap: wrap;
    display: flex;
    gap: 5%;
    h1 {
      width: 100%;
      margin-bottom: 10px;
    }
  }
`;
