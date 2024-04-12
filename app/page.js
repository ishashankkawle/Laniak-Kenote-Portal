'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Heart, Share2, Upload } from 'react-feather'
import { useState } from 'react';
import banner from '../public/keynote-logo.png';
import feature1 from '../public/feature/laniak-feature-1.png';
import feature2 from '../public/feature/laniak-feature-2_v1.png';
import feature3 from '../public/feature/laniak-feature-3_v1.png';
import logo from '../public/logoDesign.jpeg';
import Footer from '@/components/footer/footer';



export default function Home() {



  return (
    <div>
      <div className="container-fluid px-0">
        <div className={`${styles.banner}`}>

          <div className={`${styles.bannerComps}`}>
            <h1 className="display-4 mb-3">
              <Image src={banner} width={175} height={300} alt='logo' /><br /><b>Keynote</b>
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





      {/* -------------------------------------------------------------
      CONTRO PANEL FUTURE DEVELOPMENT
      ------------------------------------------------------------- */}
      {/* <div className={`${styles.controParent}`}>
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
      </div> */}


      <Footer />

      
    </div>
  )
}
