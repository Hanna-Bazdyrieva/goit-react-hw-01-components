import {
  Row,
  DataType,
  DataAmount,
  DataCurrency,
} from './TransactionHistoryRow.styled';
import PropTypes from 'prop-types';

function TransactionHistoryRow({ data }) {
  const { amount, currency, type } = data;
  return (
    <Row>
      <DataType>{type}</DataType>
      <DataAmount>{amount}</DataAmount>
      <DataCurrency>{currency}</DataCurrency>
    </Row>
  );
}

TransactionHistoryRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
export default TransactionHistoryRow;
