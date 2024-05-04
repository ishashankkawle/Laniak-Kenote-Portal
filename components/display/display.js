/* eslint-disable */
'use client';

import { useEffect, useState } from 'react'
import styles from './display.module.css'
import { getLoader } from '../preloader/preloader'
import { httpGet } from '@/app/_services/httpHandler'
import { marked } from 'marked';
import Footer from '../footer/footer';
import { Link, Share } from 'react-feather';




export default function display({ currentPage }) {

    let page = currentPage.split("/")
    page = page.slice(-1)[0]
    let [isLoading, setLoadingFlag] = useState(true)
    let [displayValues, setDisplayValues] = useState({ "title": "", "author": "", "date": "", "content": "" })


    useEffect(() => {
        if (page != 'null') {
            initialize()
        }
    }, [currentPage])


    const initialize = async () => {
        setLoadingFlag(true)
        let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
        let url = "https://gitlab.com/api/v4/projects/8300723/repository/files/" + encodeURIComponent(currentPage) + "/blame?ref=master"
        let data = await httpGet(url, headers)
        url = "https://gitlab.com/api/v4/projects/8300723/repository/files/" + encodeURIComponent(currentPage) + "/raw?ref=master"
        let dataContent = await httpGet(url, headers)
        let obj = {}
        obj["title"] = currentPage.split("/").slice(-1)[0]
        obj["author"] = data[0].commit.author_name
        let authDate = new Date(data[0].commit.authored_date)
        obj["date"] = authDate.getFullYear() + "-" + authDate.getMonth() + "-" + authDate.getDate()
        obj["content"] = { __html: marked.parse(dataContent) }

        setDisplayValues(obj)
        setLoadingFlag(false)
    }

    const copyUrl = async () => {
        navigator.clipboard.writeText(window.location.href + "&page=" + encodeURIComponent(currentPage.split("/").slice(1).join("/")))
    }

    
    if (page != 'null') {

        if (isLoading) {
            return getLoader("Loading")
        }
        else {
            return (
                <>
                    <div className={`${styles.display} ms-1 px-5 py-3`}>
                        <div className={`${styles.displayTitle}`}>
                            {displayValues.title}
                        </div>
                        <div className={`${styles.displayAuthor}`}>
                            <span>{displayValues.author}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{displayValues.date}</span>
                            <span className={`${styles.displayActionButton} mx-3`} onClick={copyUrl}>
                                <Link size={13} color='orange' />
                            </span>
                        </div>
                        
                        <div className={`${styles.displayFile} mt-4`} dangerouslySetInnerHTML={displayValues.content}>

                        </div>
                    </div>
                    <Footer />
                </>
            )
        }
    }
    else {
        return null
    }
}