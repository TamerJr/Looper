import React from 'react'
import { CookiesTerms, Disclaimer, Reservation, TermsLicense, TersmsIntro, ValueSection } from '../../Utiles/Utilities'
import "./Terms.css"
const Terms = () => {
  return (
    <section className='Terms'>
      <TersmsIntro/>
      <Reservation/>
      <CookiesTerms/>
      <TermsLicense/>
      <Disclaimer/>
    </section>
  )
}

export default Terms