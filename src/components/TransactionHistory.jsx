import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <th className={styles.tableColumn}>Type</th>
          <th className={styles.tableColumn}>Amount</th>
          <th className={styles.tableColumn}>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
