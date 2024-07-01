/* eslint-disable */
'use client';

import { useRouter } from 'next/navigation';
import styles from './navbar.module.css'
import { FileText, Grid, HelpCircle, Moon, Phone, Sun } from 'react-feather'
import { useState } from 'react';


export default function Navbar()
{
  let [isLightTheme, setLightTheme] = useState(true)
  const rouer = useRouter();
  let handleClick = async (e) => {
    rouer.push(e)
  }

  let changeTheme = async (e) => {
    if(isLightTheme)
      {
        document.documentElement.style.setProperty('--light-text-primary', '#fcfcfc');
        document.documentElement.style.setProperty('--light-text-secondary', '#FFF');
        document.documentElement.style.setProperty('--light-text-ternary', '#f9f9f9');
        document.documentElement.style.setProperty('--light-bg-primary', '#222831');
        document.documentElement.style.setProperty('--light-bg-secondary', '#393E46');
        document.documentElement.style.setProperty('--light-bg-ternary', '#adadadfe');
        setLightTheme(false)
      }
      else
      {
        document.documentElement.style.setProperty('--light-text-primary', '#222831');
        document.documentElement.style.setProperty('--light-text-secondary', '#393E46');
        document.documentElement.style.setProperty('--light-text-ternary', '#adadadfe');
        document.documentElement.style.setProperty('--light-bg-primary', '#fcfcfc');
        document.documentElement.style.setProperty('--light-bg-secondary', '#fff');
        document.documentElement.style.setProperty('--light-bg-ternary', '#f9f9f9');
        setLightTheme(true)
      }
  }

    let themeBtn = "" 
    if (isLightTheme) 
    {
      themeBtn = <a id='lan-theme-toggle-btn' className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => changeTheme()}><Moon size={20}/></a> 
    } else {
      themeBtn = <a id='lan-theme-toggle-btn' className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => changeTheme()}><Sun size={20}/></a>
    }

    return (
        <nav className={`${styles.navBlock} navbar justify-content-between`}>
          <a className={`${styles.navBrand} navbar-brand`} onClick={() => handleClick("/")}>Keynote</a>
          <div className="ms-auto d-flex">
            {themeBtn}
            <a className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => handleClick("/catalog")}>Catalog</a>
            <a className={`${styles.navTab} ${styles.navTabText} nav-item nav-link nav-btn`} onClick={() => handleClick("/gallary")}>Articles</a>
            <a className={`${styles.navTab} ${styles.navTabIcon} nav-item nav-link nav-btn`} onClick={() => handleClick("/catalog")}><Grid size={16}/></a>
            <a className={`${styles.navTab} ${styles.navTabIcon} nav-item nav-link nav-btn`} onClick={() => handleClick("/gallary")}><FileText size={16}/></a>
            {/* <a className={`${styles.navTab} nav-item nav-link nav-btn`}><Phone size={16} /></a> */}
          </div>
        </nav>
    )
}