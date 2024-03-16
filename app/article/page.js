/* eslint-disable */
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import { httpGet } from '../_services/httpHandler';
import { ChevronDown } from 'react-feather';
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
                {/* <div className={`${styles.articleDisplayTitle}`}>
                    {displayValues.title}
                </div>
                <div className={`${styles.articleDisplayAuthor}`}>
                    <span>{displayValues.author}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{displayValues.date}</span>
                </div> */}
                <div className={`${styles.articleDisplayFile} mt-4`} dangerouslySetInnerHTML={displayValues.content}>

                </div>
            </div>
        )
    }
}