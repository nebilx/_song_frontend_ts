import styled from "@emotion/styled";
export const Container = styled.div`
  background-color: #474747;
  border-radius: 5%;
  padding: 5%;
  max-width: 1000px;
  margin: auto;
  color: white;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  th,
  td {
    padding: 8px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    &:last-child {
      display: flex;
      gap: 15%;
    }
  }
`;

export const Icon = styled.div`
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 20px;
    color: ${(props) => props.color};
  }
`;
