import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

// export default ({ data }) => (
//   <div className={styles.hero}>
//     <Img
//       className={styles.heroImage}
//       alt={data.name}
//       fluid={data.heroImage.fluid}
//     />
//     <div className={styles.heroDetails}>
//       <h3 className={styles.heroHeadline}>{data.name}</h3>
//       {/* <p className={styles.heroTitle}>{data.title}</p>
//       <p>{data.shortBio.shortBio}</p> */}
//     </div>
//   </div>
// )

export default ({name, title}) => (
  <div className="page-content">
    <h1>Carter Cowan</h1>
    <p className="meta">Fullstack Engineer</p>
    <p className="meta">Austin, TX</p>
  </div>
)
