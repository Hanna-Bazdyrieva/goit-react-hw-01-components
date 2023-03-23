import {
  Table,
  TabHeader,
  HeaderType,
  Row,
  TabBody,
} from './TransactionHistory.styled';
import TransactionHistoryRow from 'components/TransactionHistoryRow/TransactionHistoryRow';
import PropTypes from 'prop-types';

function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TabHeader>
        <Row>
          <HeaderType>Type</HeaderType>
          <HeaderType>Amount</HeaderType>
          <HeaderType>Currency</HeaderType>
        </Row>
      </TabHeader>

      <TabBody>
        {transactions.map(transaction => {
          return (
            <TransactionHistoryRow key={transaction.id} data={transaction} />
          );
        })}
      </TabBody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string).isRequired
  ).isRequired,
};
export default TransactionHistory;
