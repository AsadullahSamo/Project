import React, { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Button(props) {

  return (
    <>
        <a
          href={`${props.href}`}
          target="_blank"
          className={`lg:mt-0 -mt-96 transition-all duration-100 animate__onetime ${styles.btn} m-auto bg-[#0974d4] font-sans text-[22px] text-[#fff] px-3 py-1`}
        >
        {props.btnText}
      </a>
    </>
  )
}
