'use client';

import { Activity, Folder } from 'react-feather';
import styles from './page.module.css'
import { useRouter } from 'next/navigation';

export default function catalog() {

  const rouer = useRouter();

  let handleClick = async (e) => {
    rouer.push(e)
  }

  return (
    <div className="container-fluid px-2.5">

      <div className="container-fluid cat-updates-box mt-2 mb-3">
        <span className={`${styles.catBannerTitle}`}>Full Catalog</span>
      </div>

      <div className="row p-1 justify-content-between">


        {/* <!-- FOR LOOP OVER CARDS --> */}
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        <div className={`${styles.catCard} col-sm-5 col-md-3 col-lg-3 ms-auto me-auto shadow`} onClick={() => handleClick("/board")}>
          <div className="row">
            <div className="col-3 d-flex align-items-center justify-content-center"><Folder size={18} /></div>
            <div className="col-9 content p-4">
              <div className="text-uppercase text-truncated">Folder 1</div>
            </div>
          </div>
        </div>
        
       


      </div>

    </div>
  )
}