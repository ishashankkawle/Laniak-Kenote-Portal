/* eslint-disable */
'use client';

import { Activity, Folder } from 'react-feather';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { httpGet, httpPost } from '../_services/httpHandler';
import { getFullScreenLoader } from '@/components/preloader/preloader';
import Image from 'next/image';
import Footer from '@/components/footer/footer';
import Script from 'next/script';




export default function catalog() {

  let [isLoading, setLoadingFlag] = useState(true)
  let [catalogData, setCatalog] = useState([])

  const initialize = async () => {
    let url = "https://gitlab.com/api/v4/projects/8300723/repository/tree?path=_DIR_FILES&recursive=true"
    let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
    let data = await httpGet(url, headers)
    setLoadingFlag(false)
    setCatalog(data)
  }

  useEffect(() => {
    initialize()
  }, [])

  const rouer = useRouter();

  let handleClick = async (e) => {
    rouer.push(e)
  }


  if (isLoading) {
    return getFullScreenLoader("Getting catalog");
  }
  else {

    let items = catalogData.filter((item) => item.type == "tree")
    let imgItems = catalogData.filter((item) => item.type == "blob")
    for (let index = 0; index < imgItems.length; index++) {
      items.find((item) => item.name == imgItems[index].name.split(".")[0])["url"] = "https://gitlab.com/shashankkawle/DOCS/-/raw/master/" + imgItems[index].path
    }

    let catalogList = []

    catalogList = items.map((item) => (<div key={item.name} className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board?topic=" + item.name)}>
      <div className="row">
        <div className="col-3 d-flex align-items-center justify-content-center"><Image alt={item.name} className={`${styles.catFolderLogo}`} src={item.url} width={50} height={45} priority={false} /></div>
        <div className="col-9 content p-4">
          <div className="text-uppercase text-truncated">{item.name}</div>
        </div>
      </div>
    </div>))


    return (
      <>
        <div className="container-fluid px-2.5 mb-5">

          {/* ------------------------------ ADVERTISEMENT SECTION------------------------------ */}
          <div className='text-center '>
            <Script id='ad-catalog-topbanner' type="text/javascript">
                {`aclib.runBanner({
                    zoneId: '8457242',
                });`}
            </Script>
          </div>
          {/* ------------------------------ ADVERTISEMENT SECTION------------------------------ */}

          {/* <div className="cat-updates-box mx-2 mt-2 mb-3">
            <span className={`${styles.catBannerTitle}`}>Full Catalog</span>
          </div> */}

          <div className="row p-1 justify-content-between mb-5">
            {catalogList}
          </div>
          
          

          <div className='mx-2 '>
            We really appriciate your response and contributions in the comunity. Have any corrections or Want to contribute?. Follow the guideline on How to contribute.

            <div key='How To Contribute' className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/article?topic=How to Contribute")}>
              <div className="row">
                <div className="col-3 d-flex align-items-center justify-content-center"><Image alt='How To Contribte' className={`${styles.catFolderLogo}`} src="https://gitlab.com/shashankkawle/DOCS/-/raw/master/_ARTICLES/Assets/How_To_Contribute.png" width={50} height={45} priority={false} /></div>
                <div className="col-9 content p-4">
                  <div className="text-uppercase text-truncated">How To Contribute</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </>
    )
  }
}