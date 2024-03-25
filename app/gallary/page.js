/* eslint-disable */
'use client';

import { Activity, Folder, Heart, Share, Share2 } from 'react-feather';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../_services/httpHandler';
import { getFullScreenLoader } from '@/components/preloader/preloader';
import Image from 'next/image';




export default function gallary() {

  let [isLoading, setLoadingFlag] = useState(true)
  let [articleData, setGallary] = useState([])

  const initialize = async () => {
    let url = "https://laniak-keynote-api.azurewebsites.net/gallary"
    let data = await httpGet(url)
    console.log(data)
    setLoadingFlag(false)
    setGallary(data)
  }

  useEffect(() => {
    console.log("isLoading : " + isLoading)
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
      <div key={item.name} className={`${styles.artCard} col-sm-6 col-md-4 col-lg-4 ms-auto me-auto d-block shadow`} onClick={() => handleClick("/article?topic=" + encodeURIComponent(item.name))}>
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
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className={`${styles.artCardAuthor} px-2 text-truncate`}>{item.author}</div>
          </div>
          <div className="col-sm-12 col-md-4 col-xl-4 d-block ">
            <div className={`${styles.artCardAuthor} px-2 text-truncate  text-end`}>{item.dateupdated}</div>
          </div>
          {/* ----------------------------- FUTURE DEVELOPMENT ------------------------------
          <div className="col-sm-12 col-md-4 col-xl-4">
            <div className={`${styles.artCardAuthor} px-2 text-truncate float-end d-flex`}>
              <div className='mx-2'>
                <Heart size={16} color='red' fill='red' /> <span>{item.likes}</span>
              </div>
              <div className='px-2 border rounded-pill'>
                <Share2 size={16} />
              </div> 
            </div>
          </div>
          ----------------------------- FUTURE DEVELOPMENT ------------------------------ */}
        </div>
      </div>
    ))


    return (
      <div className="container-fluid px-2.5">

        <div className="mx-2 mt-2 mb-3">
          <span className={`${styles.artBannerTitle}`}>Latest Articles</span>
        </div>

        <div className="row p-1 justify-content-between mb-5">
          {articleList}
        </div>

      </div>
    )
  }
}