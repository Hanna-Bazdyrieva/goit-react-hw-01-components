import PropTypes from 'prop-types';
import { StatsItem, Label, Percent } from './StatisticsItem.styled';

function StatisticsItem({ label, percentage }) {
  return (
    <StatsItem>
      <Label>{label}</Label>
      <Percent>{percentage}%</Percent>
    </StatsItem>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
