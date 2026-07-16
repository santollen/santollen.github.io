import styles from './Meal.module.css';
import commonStyles from './Common.module.css';

function Meal() {
  return (
    <div className={styles.meal}>
      <h3 className={commonStyles.caption}><span>식사</span></h3>

        <p>
            식사는 예식 30분 전인 오후 1시 30분 부터 가능합니다.
        </p>
    </div>
  );
}

export default Meal;
