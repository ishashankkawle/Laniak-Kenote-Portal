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
import Footer from '@/components/footer/footer';


export default function board() {

    const query = useSearchParams();
    let dir = query.get('topic')
    let [isLoading, setLoadingFlag] = useState(true)
    let [data, setData] = useState([])
    let [page, openPage] = useState(dir + "/" + decodeURIComponent(query.get('page')));


    const initialize = async () => {
        //let url = "https://gitlab.com/api/v4/projects/8300723/repository/tree?path=" + dir + "&recursive=true"
        let url = "https://laniak-keynote-api.azurewebsites.net/docs/all?path=" + dir
        let data = await httpGet(url)
        data = data.map((item) => ({ "id": item.id, "name": item.name, "type": item.type, "path": item.path.split("/").slice(1).join("/"), "mode": item.mode }))
        await setData(data)
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
                <div className="row h-100">

                    <Filetree listdata={data} topic={dir} openPage={openPage} />

                    <div className="col-sm-12 col-md-8 col-xl-8 ms-auto float-right">
                        <Display currentPage={page} />
                    </div>
                </div >
                
        )
    }
}