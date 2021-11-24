import styles from '/styles/DesktopSchoolCard.module.css'
import Link from 'next/link'

const DesktopSchoolCard = ({id, name, timesRanking, image, residents, isTablet}) => {
  const schoolUrl = `/schools/${id}/map`
  const numberOfResidents = residents.length;
  const deviceClassName = isTablet ? `tablet` : `desktop`;
  return <>
    <div className={`${styles.container} ${styles[deviceClassName]}`}>
      <Link href={schoolUrl}>
        <>
          <div className={styles.schoolImage}>
            <img
              src={image}
              alt={name}
            />
          </div>
          {/*<div className={styles.schoolDetails}>*/}
          <div className={`${styles.schoolDetails}`}>
            <h1>{name}</h1>
            <p>Barnet</p>
            <span className={styles.highlight}> OutStanding</span> | <span className={styles.highlight}> Boys Only</span>
            <p>Times Ranking : <strong>{timesRanking}</strong></p>
            <p>Number of residents : <strong>{numberOfResidents}</strong></p>
          </div>
        </>
      </Link>
    </div>
  </>
}

export default DesktopSchoolCard;