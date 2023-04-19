import React from 'react'
import styles from './styles.module.css'


export const Button =({text,type})=>{
  return <div className={styles.test}> <button  className={`${styles.btn} ${styles[type]}`} type={type}>{text}</button>
  </div>
}   