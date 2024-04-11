/* eslint-disable */
'use client';

import { useEffect, useState } from 'react';
import styles from './articledisplay.module.css';
import { httpGet, httpPut } from '@/app/_services/httpHandler';
import { CheckCircle, ChevronDown, Heart, Link } from 'react-feather';
import { getFullScreenLoader } from '@/components/preloader/preloader';
import display from '../display/display';
import { useRouter } from 'next/router';


export default function articledisplay({ currentArticleId, currentArticleTopic }) {

    let articleId = currentArticleId;
    let article = currentArticleTopic;
    let [isLoading, setLoadingFlag] = useState(true)
    let [isLinkCopied, setLinkCopyFlag] = useState(false)
    let [displayValues, setDisplayValues] = useState({ "title": "", "author": "", "date": "", "content": "" })

    const initialize = async () => {
        setLoadingFlag(true)
        let url = "https://laniak-keynote-api.azurewebsites.net/article/summary?id=" + articleId
        let data = await httpGet(url)
        let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
        url = "https://gitlab.com/api/v4/projects/8300723/repository/files/_ARTICLES%2F" + article + "/raw?ref=master"
        let dataContent = await httpGet(url, headers)
        let obj = {}
        obj["title"] = article.split("/").slice(-1)[0]
        obj["author"] = data.author
        obj["date"] = data.datecreated
        obj["dateupdated"] = data.dateupdated
        obj["id"] = data.id
        obj["likes"] = data.likes
        obj["email"] = data.authoremail
        obj["content"] = { __html: dataContent }

        setDisplayValues(obj)
        setLoadingFlag(false)
    }

    useEffect(() => {
        initialize()
    }, [])

    const copyUrl = async () => 
    {
        navigator.clipboard.writeText(window.location.href)
        setLinkCopyFlag(true)
    }

    const handleLike = async () => {
        let body = { "id": articleId }
        let url = "https://laniak-keynote-api.azurewebsites.net/article/likes"
        httpPut(url, body)
        let obj = {
            ...displayValues,
            "likes": (parseInt(displayValues.likes) + 1).toString()
        }
        console.log(obj)
        setDisplayValues(obj)
    }

    if (isLoading) {
        return getFullScreenLoader("Loading")
    }
    else {
        let copyBtnIcon = ""

        if(isLinkCopied)
        {
            copyBtnIcon = (<CheckCircle size={20} color='limegreen' />)
        }
        else
        {
            copyBtnIcon = (<Link size={20} color='orange' />)
        }
        return (
            <div className={`${styles.articleDisplay} ms-1 px-5 py-3`}>

                <div className={`border-bottom p-2 row`}>
                    <div className={`mx-1 text-smaller text-truncate`}>
                        <Heart size={16} color='red' fill='red' /><span className='px-2'>{displayValues.likes}</span> &nbsp; / &nbsp; Last updated: <span className='px-2'>{displayValues.dateupdated}</span>
                    </div>
                </div>

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
                    <div className={`${styles.articleFooterAction} p-2 col-sm-12 col-md-2 col-xl-2 flex-column`}>
                        <div className='row'>
                            <span className={`${styles.articleFooterActionButton} mx-1`} onClick={handleLike}>
                                <Heart size={20} color='red' fill='red' />
                            </span>
                            <span id='knt-copy-btn' className={`${styles.articleFooterActionButton} mx-1`} onClick={copyUrl}>
                                {copyBtnIcon}
                            </span>
                        </div>
                        {/* <div className='row'>
                            <span className={`${styles.articleFooterPopup} row`}>Link copied !</span>
                        </div> */}
                    </div>
                </div>

            </div>
        )
    }
}