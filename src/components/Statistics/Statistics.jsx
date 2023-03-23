import PropTypes from 'prop-types';
import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import { StatisticsStyled, List, Title } from './Statistics.styled';
function Statistics({ title, stats }) {
  return (
    <StatisticsStyled>
      {title && <Title> {title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatisticsItem
              key={id}
              id={id}
              label={label}
              percentage={percentage}
            />
          );
        })}
      </List>
    </StatisticsStyled>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;

// 2- Секція статистики
// Створити компонент <Statistics>, який би відображав статистику з переданих пропсів. Наприклад, завантаження у хмару за типом файлів, відвідування веб-сторінки користувачами різних країн, фінансові витрати тощо. Дані про статистику лежать у файлі data.json.

// component preview
// Опис компонента <Statistics>
// Компонент повинен приймати два пропи title і stats, в яких вказується заголовок та об'єкт статистики.

// title – не обов'язковий, і якщо він не переданий, не повинна рендеритись розмітка заголовка <h2>.
// stats – масив об'єктів, що містять інформацію про елемент статистики. Може мати довільну кількість елементів.
// Колір фону елемента статистики в оформленні можна пропустити або створити функцію для генерації випадкового кольору.
// Компонент повинен створювати DOM елемент наступної структури.

// Приклад використання
// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
