'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Clock, Heart, Share2, Star, Upload } from 'react-feather'
import { useState, useEffect } from 'react';
import banner from '../public/keynote-logo.png';
import feature1 from '../public/feature/laniak-feature-1.png';
import feature2 from '../public/feature/laniak-feature-3_v2.png';
import feature3 from '../public/feature/laniak-feature-2_v2.png';
import logo from '../public/logoDesign.png';
import Footer from '@/components/footer/footer';
import { httpGet } from './_services/httpHandler';
import { useRouter } from 'next/navigation';




export default function Home() {


  let [isLoading, setLoadingFlag] = useState(true)
  let [dataList, setData] = useState([])
  let itemCard = null;
  let item = undefined
  const rouer = useRouter();


  const initialize = async () => {
    let url = "https://laniak-keynote-api.azurewebsites.net/articles/gallary"
    let data = await httpGet(url)
    setLoadingFlag(false)
    setData(data)
  }

  useEffect(() => {
    initialize()
  }, [])

  let handleClick = async (e) => {
    rouer.push(e)
  }

  item = dataList[0]

  if (item == undefined) {
    itemCard = (<div className={`${styles.newStoryCard} placeholder-wave`}>
      <div className="row">
        <div className='col-sm-12 col-mb-9 col-xl-9 p-3'>
          <div className='placeholder col-12 bg-light ps-3 mt-2 mb-2 row'>
            <h4>&nbsp;</h4>
          </div>
          <div className='placeholder placeholder-lg col-12 bg-light ps-3 row'>
          </div>
          <div className='placeholder placeholder-lg col-12 bg-light ps-3 row'>
          </div>
          <div className='placeholder placeholder-lg col-12 bg-light ps-3 row'>
          </div>
          <div className='ps-3 placeholder col-12 bg-light row mt-3 mb-3'>
          </div>
        </div>
      </div>
    </div>)
  }
  else {
    itemCard = (<div className={`${styles.newStoryCard}`}>
      <div className="row">
        <div className='col-sm-12 col-mb-3 col-xl-3'>
          <img alt={item.name} className={`${styles.newStoryBannerImg}`} src={item.url} priority="false" />
        </div>
        <div className='col-sm-12 col-mb-9 col-xl-9'>
          <div className='ps-3 mt-2 mb-2 row'>
            <h3>{item.name}</h3>
          </div>
          <div className='ps-3 row'>
            <p>{item.description}</p>
          </div>
          <div className='ps-3 row mb-3 text-secondary'>
            <small>- {item.author} &nbsp;&nbsp; <Clock size={16} /> {item.datecreated}</small>
          </div>
          <div className='ps-3 row'>
            <button type="button" class="btn btn-outline-primary" onClick={() => handleClick("/article?id=" + item.id + "&topic=" + encodeURIComponent(item.name))}>Read more</button>
          </div>
        </div>
      </div>
    </div>)
  }

  return (
    <div>

      {/* -------------------------------------------------------
          MAIN BANNER
          ------------------------------------------------------- */}
      <div className="container-fluid px-0">
        <div className={`${styles.banner}`}>
          <div className={`${styles.bannerComps}`}>
            <h1 className="display-3 mb-3">
              <Image src={banner} width={300} height={300} alt='logo' /><br /><b style={{ "fontSize" : "1em"}}>Technote</b>
            </h1>
            <h3 className="blockquote">
              Learn and evolve through the super cluster of tech-science
            </h3>
            Technote is knowledge sharing hub here you can learn <br /> through the experices shared by community via docs to get optimum <br /> solution for your problem
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------
          LATEST ARTICLE
          ------------------------------------------------------- */}
      <div className="container-fluid my-5 p-0">
        <div className={`${styles.newStorySection} shadow`}>
          <div className={`${styles.newStoryText} row mb-3`}><h1>Latest Now</h1></div>

          {itemCard}

        </div>
      </div>

      {/* -------------------------------------------------------
        ABOUT TECHNOTE
        ------------------------------------------------------- */}
      <div className="container-fluid mt-2">
        <div className={`${styles.introHeading}`}>
            <h1>
              Why Technote?
            </h1>
        </div>

        <div className="container">

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>01</span>
            <div className={`${styles.featureText} col-6`}>
              <h4 className={`${styles.featureHeading}`}><b>Easy to Understand.</b></h4>
              <p>Technotes are created in simplest terms that are easy to quickly understand and absorb. Sharing their own experiene through notes laniak will connect you with developers around the world</p>
            </div>
            <Image src={feature1} className={`${styles.featureImg} float-end`} alt='feature 1' />
          </div>

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>02</span>
            <Image src={feature2} className={`${styles.featureImg}`} alt='feature 2' />
            <div className={`${styles.featureText} col-6 ms-auto`}>
              <h4 className={`${styles.featureHeading}`}><b>In Depth Analytics</b></h4>
              <p>Each technote is created with in depth understanding and learings from respective areas to provide detailed understanding over the subject</p>
            </div>
          </div>

          <div className={`${styles.featureBox} row`}>
            <span className={`${styles.featureNum} col-2`}>03</span>
            <div className={`${styles.featureText} col-6`}>
              <h4 className={`${styles.featureHeading}`}><b>Tailored Contents</b></h4>
              <p>Technote provides tailored contents generated through challenges faced and resolved by developers to achieve on point documentation for developers</p>
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


      {/* -------------------------------------------------------
        UPCOMING UPDATES
        ------------------------------------------------------- */}
      <div className="container-fluid mt-3 p-0">
        <div className={`${styles.upcomingUpdateSection} m-5 shadow`}>
          <div className={`${styles.upcomingUpdateText} row mb-3`}><h2>Coming soon</h2></div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-xl-6 align-self-center'>
              We are thrilled to announce the upcoming launch of our step-by-step <b>courses</b>, designed specifically for developers like YOU. Whether you are just starting out or looking to level up, these courses will guide you through each stage.
            </div>
            <div className='col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center'>
              <img className={`${styles.upcomingUpdateBanner}`} src='https://cdni.iconscout.com/illustration/premium/thumb/boy-completed-online-course-certificate-illustration-download-in-svg-png-gif-file-formats--training-courses-learning-tutorial-video-education-pack-e-illustrations-4088920.png' />
            </div>
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------
        FOOTER
        ------------------------------------------------------- */}
      <Footer />


    </div>
  )
}
