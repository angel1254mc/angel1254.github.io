import React from 'react'
import styles from '../styles/Hero.module.css'
function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.planet_center_div}>
        <div className={styles.planets}>
          <svg viewBox="0 0 563 886" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className={styles.greenPlanet} cx="282" cy="163" r="160" fill="url(#paint0_radial_0_1)" stroke="white" stroke-width="4"/>
          <circle className={styles.yellowPlanet} cx="283" cy="343" r="132" fill="url(#paint1_radial_0_1)" stroke="white" stroke-width="4"/>
          <circle className={styles.orangePlanet} cx="282.5" cy="565.5" r="147.5" fill="url(#paint2_radial_0_1)" stroke="white" stroke-width="4"/>
          <circle className={styles.purplePlanet} cx="282" cy="776" r="92" fill="url(#paint3_radial_0_1)" stroke="white" stroke-width="4"/>
          <mask id="path-5-inside-1_0_1" fill="white">
          <path d="M377.591 729.1C439.596 737.058 491.68 750.89 524.731 768.177C557.781 785.463 569.694 805.102 558.383 823.658C547.073 842.214 513.26 858.505 462.861 869.68C412.462 880.856 348.687 886.204 282.694 884.79C216.701 883.375 152.693 875.288 101.869 861.942C51.0461 848.597 16.6441 830.844 4.68273 811.789C-7.27863 792.734 3.96239 773.592 36.439 757.71C68.9155 741.828 120.559 730.219 182.334 724.915L195.205 735.119C141.466 739.734 96.5398 749.833 68.2877 763.649C40.0356 777.465 30.2567 794.118 40.6622 810.694C51.0677 827.27 80.9948 842.714 125.207 854.323C169.419 865.933 225.101 872.968 282.51 874.199C339.919 875.429 395.399 870.776 439.242 861.055C483.085 851.333 512.5 837.161 522.339 821.019C532.178 804.876 521.815 787.792 493.064 772.754C464.313 757.716 419.003 745.683 365.064 738.76L377.591 729.1Z"/>
          </mask>
          <path className={styles.planetRing} d="M377.591 729.1C439.596 737.058 491.68 750.89 524.731 768.177C557.781 785.463 569.694 805.102 558.383 823.658C547.073 842.214 513.26 858.505 462.861 869.68C412.462 880.856 348.687 886.204 282.694 884.79C216.701 883.375 152.693 875.288 101.869 861.942C51.0461 848.597 16.6441 830.844 4.68273 811.789C-7.27863 792.734 3.96239 773.592 36.439 757.71C68.9155 741.828 120.559 730.219 182.334 724.915L195.205 735.119C141.466 739.734 96.5398 749.833 68.2877 763.649C40.0356 777.465 30.2567 794.118 40.6622 810.694C51.0677 827.27 80.9948 842.714 125.207 854.323C169.419 865.933 225.101 872.968 282.51 874.199C339.919 875.429 395.399 870.776 439.242 861.055C483.085 851.333 512.5 837.161 522.339 821.019C532.178 804.876 521.815 787.792 493.064 772.754C464.313 757.716 419.003 745.683 365.064 738.76L377.591 729.1Z" stroke="white" stroke-width="10" mask="url(#path-5-inside-1_0_1)"/>
          <path className={styles.strikeThrough} d="M284.921 1.00122L281 863.872" stroke="white" stroke-width="5"/>
          <defs>
          <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(154.997 238.073) rotate(-42.2737) scale(352.435)">
          <stop stop-color="#4C5137"/>
          <stop offset="1" stop-color="#5BCC88"/>
          </radialGradient>
          <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(177.948 405.098) rotate(-42.2737) scale(291.52)">
          <stop stop-color="#849C25"/>
          <stop offset="1" stop-color="#DAC13C"/>
          </radialGradient>
          <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(165.296 634.78) rotate(-42.2737) scale(325.241)">
          <stop stop-color="#F85757"/>
          <stop offset="1" stop-color="#DE6A29"/>
          </radialGradient>
          <radialGradient id="paint3_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(208.307 819.561) rotate(-42.2737) scale(204.499)">
          <stop stop-color="#1E2276"/>
          <stop offset="1" stop-color="#C957FF"/>
          </radialGradient>
          </defs>
          </svg>
        </div>
      </div>
      <div className={styles.moveUp_Header}>
          Angel Lopez Pol
        </div>
    </div>
  )
}

export default Hero

