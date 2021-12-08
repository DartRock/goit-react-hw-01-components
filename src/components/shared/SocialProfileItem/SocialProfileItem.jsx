import PropTypes from 'prop-types';
import s from './SocialProfileItem.module.css';

const SocialProfileItem = ({ title, amount }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{title}</span>
      <span className={s.quantity}>{amount}</span>
    </li>
  );
};

SocialProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default SocialProfileItem;
