import styled from 'styled-components';

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  padding: 20px 0;
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }};
  &:not(:last-of-type) {
    border-right: 1px dotted black;
  }
`;
export const Label = styled.span`
  font-style: italic;
`;
export const Percent = styled(Label)`
  color: rgb(42, 41, 41);
`;
