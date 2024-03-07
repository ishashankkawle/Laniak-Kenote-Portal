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


export default function board() {

    let [isLoading, setLoadingFlag] = useState(true)
    let [data, setData] = useState([])
    let [page, openPage] = useState();
    const query = useSearchParams();
    let dir = query.get('topic')


    const initialize = async () => {
        let url = "https://gitlab.com/api/v4/projects/8300723/repository/tree?path=" + dir + "&recursive=true"
        let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
        let data = await httpGet(url, headers)
        data = data.map((item) => ({ "id": item.id, "name": item.name, "type": item.type, "path": item.path.split("/").slice(1).join("/"), "mode": item.mode }))
        await setData(data)
        setLoadingFlag(false)
    }

    useEffect(() => {
        initialize()
    }, [])


    console.log(page)

    if (isLoading) 
    {
        return getFullScreenLoader("Loading")
    }
    else 
    {
        return (
            <div className="row h-100">

                <Filetree listdata={data} topic={dir} openPage={openPage} />

                <div className="col-10 offset-2">
                    <Display currentPage={page} />
                </div>
            </div >
        )
    }
}