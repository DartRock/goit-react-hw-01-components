import PropType from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statlist}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: `${getRandomHexColor()}` }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propType = {
  title: PropType.string,
  stats: PropType.shape({
    id: PropType.string.isRequired,
    label: PropType.string.isRequired,
    percentage: PropType.number.isRequired,
  }),
};

export default Statistics;
