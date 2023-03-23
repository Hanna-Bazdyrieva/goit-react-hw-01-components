import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 400px;

  margin: 10px;
  padding: 20px 80px;

  background-color: rgb(204, 243, 159);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const Avatar = styled.img`
  width: 60px;
  height: auto;
  padding: 15px 20px;
  overflow: visible;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${props => {
    return props.children === true ? 'green' : 'red';
  }};
  border-radius: 50%;
`;
