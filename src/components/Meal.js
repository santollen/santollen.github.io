import styles from './Meal.module.css';
import commonStyles from './Common.module.css';

function Meal() {
  return (
    <div className={styles.meal}>
      <h3 className={commonStyles.caption}><span>식사</span></h3>

        <p>
            식사는 예식 1시간 전부터 가능합니다.
            <br />
            <br />
            1시~ 2시 지하 1층 / 2시 이후 12층
            <br />
            <br />
            자세한 내용은 식장에서 안내해 드릴 예정입니다.
        </p>
    </div>
  );
}

export default Meal;
