import styles from '/styles/SchoolCard.module.css'
import Link from 'next/link'

const SchoolCard = ({id, name, timesRanking, image, residents}) => {
  const schoolUrl = `/schools/${id}/map`
  const numberOfResidents = residents.length;
  return <>
    <div className={styles.container}>
      <div className={styles.productDetails}>
        <h1>{name}</h1>
        <p>Times Ranking : <strong>{timesRanking}</strong></p>
        <p>Number of residents : <strong>{numberOfResidents}</strong></p>
         <div className={styles.control}>
           <Link href={schoolUrl}>
           {/*<button className="btn">School Friends</button>*/}
             <button className={styles.btn}>
               <span className={styles.text}>School Friends</span>
             </button>
           </Link>
         </div>
      </div>
      <div className={styles.schoolImage}>
        <img
          src={image}
          alt={name}
        />
      </div>
    </div>
  </>
}

export default SchoolCard;