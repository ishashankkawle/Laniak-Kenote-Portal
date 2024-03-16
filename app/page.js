'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Heart, Share2, Upload } from 'react-feather'
import { useState } from 'react';
import banner from '../public/logoDesign.png';
import feature1 from '../public/feature/laniak-feature-1.png';
import feature2 from '../public/feature/laniak-feature-2_v1.png';
import feature3 from '../public/feature/laniak-feature-3_v1.png';



export default function Home() {



  return (
    <div>
      <div className="container-fluid px-0">
        <div className={`${styles.banner}`}>

          {/* <nav className="navbar justify-content-between">
            <a className={`${styles.navBrand} navbar-brand mx-4`}>Laniak</a>
            <div className="ms-auto d-flex">
              <a className={`${styles.navTab} nav-item nav-link nav-btn mx-4`} onClick={handleClick}>Catalog</a>
              <a className={`${styles.navTab} nav-item nav-link nav-btn mx-4`}><HelpCircle size={16} /></a>
              <a className={`${styles.navTab} nav-item nav-link nav-btn mx-4`}><Phone size={16} /></a>
            </div>
          </nav> */}

          <div className={`${styles.bannerComps}`}>
            <h1 className="display-4 mb-3">
              <Image src={banner} width={300} height={300} alt='logo' /><br /><b>Keynote</b>
            </h1>
            <h3 className="blockquote">
              Learn and evolve through the super cluster of tech-science
            </h3>
            Keynote is knowledge sharing hub here you can learn <br /> through the experices shared by community via docs to get optimum <br /> solution for your problem
          </div>
        </div>
      </div>

      <div className="container-fluid mt-2">
        <div className={`${styles.introHeading} mt-5 mb-5`}>
          <div>
            <h2>
              Why Keynote?
            </h2>
          </div>
        </div>

        <div className="container">

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>01</span>
            <div className={`${styles.featureText} col-6`}>
              <h4 className={`${styles.featureHeading}`}><b>Easy to Understand.</b></h4>
              <p>Keynotes are created in simplest terms that are easy to quickly understand and absorb. Sharing their own experiene through notes laniak will connect you with developers around the world</p>
            </div>
            <Image src={feature1} className={`${styles.featureImg} float-end`} alt='feature 1' />
          </div>

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>02</span>
            <Image src={feature2} className={`${styles.featureImg}`} alt='feature 2' />
            <div className={`${styles.featureText} col-6 ms-auto`}>
              <h4 className={`${styles.featureHeading}`}><b>More Productive.</b></h4>
              <p>Keynote opens doors to wide range of developer technologies. Developers around thee world can help through laniak for you to be more productive and make your own legacy application</p>
            </div>
          </div>

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>03</span>
            <div className={`${styles.featureText} col-6`}>
              <h4 className={`${styles.featureHeading}`}><b>Backed by huge community.</b></h4>
              <p>Keynote thanks to all the developers around the world for putting their efforts in sharing their problems and solving them throuh laniak. This laniak is created for delopers by developers itself</p>
            </div>
            <Image src={feature3} className={`${styles.featureImg} float-end`} alt='feature 3' />
          </div>
        </div>
      </div>
      <div className={`${styles.controParent}`}>
        <div className={`${styles.controBox}`}>
          <h1 className="mb-5">Total Contributions till now</h1>
          <div className="container mt-5">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xl-4 px-0 mb-5">
                <div className={`${styles.controBall} ${styles.controCount} mx-auto`}><span className="align-middle">123</span></div><br />
                <Heart size={16} color='red' fill='red' /><br />
                <span className="info">Favourites</span>
              </div>
              <div className="col-sm-12 col-md-12 col-xl-4 px-0 mb-5">
                <div className={`${styles.controBall} ${styles.controCount} mx-auto`}><span className="align-middle">123</span></div><br />
                <Upload size={16} color='skyblue' /><br />
                <span className="info">Uploads</span>
              </div>
              <div className="col-sm-12 col-md-12 col-xl-4 px-0 mb-5">
                <div className={`${styles.controBall} ${styles.controCount} mx-auto`}><span className="align-middle">123</span></div><br />
                <Share2 size={16} color='greenyellow' fill='greenyellow' /><br />
                <span className="info ">Recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-xl-3">
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Feedback</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-6 col-xl-3">
            <ul>
              <li>Latest Releases</li>
              <li>Catalog</li>
              <li>Admin</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-xl-6 text-center link-sec">
            <div className={`${styles.footerLinkSec} mb-2`}>
              View me on
            </div>
            <div>
              <a className={`${styles.footerProfileLink}`} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg></a>
              <a className={`${styles.footerProfileLink}`} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg></a>
              <a className={`${styles.footerProfileLink}`} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg></a>
              <a className={`${styles.footerProfileLink}`} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg></a>
              <a className={`${styles.footerProfileLink}`} href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
