/* eslint-disable */
'use client';

import { Activity, Folder, Heart, Share, Share2 } from 'react-feather';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../_services/httpHandler';
import { getFullScreenLoader } from '@/components/preloader/preloader';
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import Script from 'next/script';




export default function gallary() {

  let [isLoading, setLoadingFlag] = useState(true)
  let [articleData, setGallary] = useState([])

  const initialize = async () => {
    let url = "https://laniak-keynote-api.azurewebsites.net/articles/gallary"
    let data = await httpGet(url)
    setLoadingFlag(false)
    setGallary(data)
  }

  useEffect(() => {
    initialize()
  }, [])

  const rouer = useRouter();

  let handleClick = async (e) => {
    rouer.push(e)
  }


  if (isLoading) {
    return getFullScreenLoader("Getting articles");
  }
  else {

    let articleList = []

    articleList = articleData.map((item) => (
      <div key={item.name} className={`${styles.artCard} col-sm-6 col-md-5 col-lg-3 ms-auto me-auto d-block shadow`} onClick={() => handleClick("/article?id=" + item.id + "&topic=" + encodeURIComponent(item.name))}>
        <div className="row mb-3">
          <img alt={item.name} className={`${styles.artBannerImg}`} src={item.url} priority="false" />
        </div>
        <div className="row mb-3">
          <div className="px-2 text-truncate">{item.name}</div>
        </div>
        <div className="row mb-3 text-x-smaller">
          <div className={`${styles.artCardDescriiption} px-2 text-truncate `}>{item.description}</div>
        </div>

        <div className="row mb-2 text-x-smaller justify-content-between">
          <div className={`${styles.artCardAuthorSec} px-2 text-truncate`}>
            <div className={`${styles.artCardAuthor} text-truncate`}>{item.author}</div>
            <div className={`${styles.artCardAuthor} text-truncate`}>{item.dateupdated}</div>
          </div>

          <div className={`${styles.artCardAuthorSec} px-2 text-truncate d-flex justify-content-end align-items-center`}>
            <div className={`${styles.artCardInsights} px-2 text-truncate`}>
              <Heart size={16} color='red' fill='red' /><span className='px-1'>{item.likes}</span>
            </div>
            {/* <div className={`${styles.artCardInsights} px-2 text-truncate`}>
               <Share2 size={16} color='orange'/>
              </div> */}
          </div>

        </div>
      </div>
    ))


    return (
      <>
        <div className="container-fluid px-2.5">
          {/* <div className="mx-2 mt-2 mb-3">
            <span className={`${styles.artBannerTitle}`}>Latest Articles</span>
          </div> */}

          {/* ------------------------------ ADVERTISEMENT SECTION------------------------------ */}
          
          {/* ------------------------------ ADVERTISEMENT SECTION------------------------------ */}

          <div className={`${styles.artList} row g-1 p-1 justify-content-between mb-5`}>
            {articleList}
          </div>

        </div>
        <Footer />
      </>
    )
  }
}