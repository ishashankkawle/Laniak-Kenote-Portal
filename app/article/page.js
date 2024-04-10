/* eslint-disable */
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import { httpGet } from '../_services/httpHandler';
import { ChevronDown, Heart, Link } from 'react-feather';
import Filetree from '@/components/filetree/filetree'
import Display from '@/components/display/display'
import { getFullScreenLoader } from '@/components/preloader/preloader';


export default function article() {

    const query = useSearchParams();
    let article = query.get('topic')
    let [isLoading, setLoadingFlag] = useState(true)
    let [displayValues, setDisplayValues] = useState({ "title": "", "author" : "", "date": "", "content": "" })


    const initialize = async () => {
        setLoadingFlag(true)
        let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
        let url = "https://gitlab.com/api/v4/projects/8300723/repository/files/_ARTICLES%2F" + article + "/blame?ref=master"
        let data = await httpGet(url, headers)
        url = "https://gitlab.com/api/v4/projects/8300723/repository/files/_ARTICLES%2F" + article + "/raw?ref=master"
        let dataContent = await httpGet(url, headers)
        let obj = {}
        obj["title"] = article.split("/").slice(-1)[0]
        obj["author"] = data[0].commit.author_name
        let authDate = new Date(data[0].commit.authored_date)  
        obj["date"] = authDate.getFullYear() + "-" + authDate.getMonth() + "-" + authDate.getDate()
        obj["content"] = { __html: dataContent }

        setDisplayValues(obj)
        setLoadingFlag(false)
    }

    useEffect(() => {
        initialize()
    }, [])


    if (isLoading) {
        return getFullScreenLoader("Loading")
    }
    else {
        return (
            <div className={`${styles.articleDisplay} ms-1 px-5 py-3`}>
                <div className={`${styles.articleDisplayFile} mt-4`} dangerouslySetInnerHTML={displayValues.content}>
                </div>
                <div className={`${styles.articleFooter} row d-flex justify-content-between py-5`}>
                    <div className="col-sm-12 col-md-10 col-xl-10">
                        <div className="p-2">
                            <div className={`${styles.articleFooterAuthorHeader}`}>
                                - Published by
                            </div>
                            <div className={`${styles.articleFooterAuthor}`}>
                                {displayValues.author}
                            </div>
                            <div className={`${styles.articleFooterDate}`}>
                                {displayValues.date}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.articleFooterAction} p-2 col-sm-12 col-md-2 col-xl-2`}>
                        <span className={`${styles.articleFooterActionButton} mx-1`}>
                            <Heart size={20} color='red' fill='red' />
                        </span>
                        <span className={`${styles.articleFooterActionButton} mx-1`}>
                            <Link size={20} color='orange'/>
                        </span>
                        {/* <div className={`${styles.articleFooterActionButton}`}>
                            <Heart size={20} color='red' fill='red' />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}