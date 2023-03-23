import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 70%;
  font-size: 28px;
  border: 3px solid black;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const Row = styled.tr``;
export const TabHeader = styled.thead`
  background-color: rgb(204, 243, 159);
`;

export const HeaderType = styled.th`
  background-color: rgb(204, 243, 159);
  padding: 20px;
  border: 1px solid;
`;
export const TabBody = styled.tbody`
  & tr:nth-child(odd) {
    background-color: rgb(237, 252, 221);
  }
`;

// export const HeaderAmount = styled(HeaderType)`
//   background-color: rgb(204, 243, 159);
// `;
// export const HeaderType = styled.thead`
//   background-color: rgb(204, 243, 159);
// `;
// }
// thead {
//   background-color: rgb(204, 243, 159);
// }
// tbody {
//   background-color: rgb(239, 239, 168);
// }
// tr,
// th,
// td {
//   border: 1px solid;
//   padding: 20px;
//   text-align: center;
//   /* opacity: 0.9; */
// }

// td {
// }
