import hall from '../assets/images/hall.jpg';
import buffet from '../assets/images/buffet.jpg';
import naverMap from '../assets/icons/naver_map.png';

import styles from './Location.module.css';

function Location() {
  const onButtonClick = () => {
    window.open('https://naver.me/F1rxJcrX', '_blank');
  };

  return (
    <section className={styles.location}>
      <h3 className={styles.caption}><span>LOCATION</span></h3>

      <div className={styles.image_wrap}>
        <img src={hall} alt="홀 이미지" />
      </div>

      <div className={styles.image_wrap}>
        <img src={buffet} alt="뷔페 이미지" />
      </div>

      <div className={styles.traffic_wrap}>
        <ul>
          <li className={styles.list}>
            <span>주소</span>
            <ul>
              <li>
                서울 송파구 올림픽로 319, <span className={styles.impact}>더컨벤션 잠실</span> 3층
              </li>
            </ul>
          </li>
          
          <li className={styles.list}>
            <span>지하철 이용 시</span>
            <ul>
              <li>
                <span className={styles.subway_2}>2</span>
                <span className={styles.subway_8}>8</span>
                잠실역 9번 출구 도보 1분
              </li>
            </ul>
          </li>

          <li className={styles.list}>
            <span>버스 이용 시</span>
            <ul>
              <li>
                <div className={styles.bus_first_row}>
                  <p>
                    <span className={styles.bus_green}>일반</span>
                    16, 32, 100, 101
                  </p>
                  <p>
                    <span className={styles.bus_blue}>간선</span>
                    310, 341, 360
                  </p>
                </div>

                <div className={styles.bus_first_row}>
                  <p>
                    <span className={styles.bus_green}>지선</span>
                    2311, 3411
                  </p>
                  <p>
                    <span className={styles.bus_red}>광역ㆍ직행</span>
                    1000, 1100, 1700 <br />
                  </p>
                </div>

                <span className={styles.bus_stop_name}>* 그 외 다양한 노선 이용 가능</span>
              </li>
            </ul>
          </li>

          <li className={styles.list}>
            <span>자가용 이용 시</span>
            <ul>
              <li className={styles.parking_info}>
                교통회관 지상, 지하 주차장 이용<br />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <button className={styles.map_button} onClick={onButtonClick}>
          <img src={naverMap} alt="네이버지도 아이콘" />
          <span>네이버 지도 바로가기</span>
      </button>
    </section>
  );
}

export default Location;
