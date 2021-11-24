import styles from '/styles/DesktopSchoolCard.module.css'
import Link from 'next/link'

const MobileSchoolCard = ({id, name, timesRanking, image, residents}) => {
  const schoolUrl = `/schools/${id}/map`
  // const numberOfResidents = residents.length;
  const numberOfResidents = 5;
  return <>
    <div className={styles.container}>
      <Link href={schoolUrl}>
        <>
          <div className={styles.schoolDetails}>
            <h1>{name}</h1>
            <p>Barnet</p>
            <div className={styles.highlightContainer}>
              <div className={styles.highlight}> OutStanding</div>
              | <div className={styles.highlight}> Boys Only</div>
            </div>
            <p>Times Ranking : <strong>{timesRanking}</strong></p>
            <p>Number of residents : <strong>{numberOfResidents}</strong></p>
          </div>
        </>
      </Link>
    </div>
  </>
}

export default MobileSchoolCard;