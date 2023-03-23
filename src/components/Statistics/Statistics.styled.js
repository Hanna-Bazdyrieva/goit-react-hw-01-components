import styled from 'styled-components';

export const StatisticsStyled = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px auto;
  padding: 20px;
  width: 800px;
  background-color: rgb(239, 239, 168);

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  width: 750px;
  margin: 10px auto;
  padding: 20px;

  text-align: center;
  font-size: 30px;
  font-weight: 800;
  color: black;
  text-shadow: 0px 0px 40px rgba(255, 255, 255, 1);
  background-color: rgb(204, 243, 159);
  border-radius: 20px;
`;
export const Title = styled.h2`
  margin: 30px auto;
  font-size: 36px;
`;
