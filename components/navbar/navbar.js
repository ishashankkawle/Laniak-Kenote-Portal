/* eslint-disable */
'use client';

import { useRouter } from 'next/navigation';
import styles from './navbar.module.css'
import { FileText, Grid, HelpCircle, Phone } from 'react-feather'


export default function Navbar()
{
  const rouer = useRouter();

  let handleClick = async (e) => {
    rouer.push(e)
  }

    return (
        <nav className={`${styles.navBlock} navbar justify-content-between`}>
          <a className={`${styles.navBrand} navbar-brand`} onClick={() => handleClick("/")}>Keynote</a>
          <div className="ms-auto d-flex">
            <a className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => handleClick("/catalog")}>Catalog</a>
            <a className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => handleClick("/gallary")}>Articles</a>
            <a className={`${styles.navTab} ${styles.navTabIcon} nav-item nav-link nav-btn`} onClick={() => handleClick("/catalog")}><Grid size={16}/></a>
            <a className={`${styles.navTab} ${styles.navTabIcon} nav-item nav-link nav-btn`} onClick={() => handleClick("/gallary")}><FileText size={16}/></a>
            <a className={`${styles.navTab} nav-item nav-link nav-btn`}><Phone size={16} /></a>
          </div>
        </nav>
    )
}