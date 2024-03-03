/* eslint-disable */
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { useRouter, useSearchParams } from 'next/navigation';
import { httpGet } from '../_services/httpHandler';
import { ChevronDown } from 'react-feather';

export default function board() {

    let [isLoading, setLoadingFlag] = useState(true)
    let [data, setData] = useState([])
    const query = useSearchParams();
    let dir = query.get('topic')
    let pathArray = []
    let nested = [];
    let rootNode = [];



    const initialize = async () => {
        let url = "https://gitlab.com/api/v4/projects/8300723/repository/tree?path=" + dir + "&recursive=true"
        let headers = { "PRIVATE-TOKEN": "glpat-xG6KXqNybtRAVdhd1pyM" }
        let data = await httpGet(url, headers)
        data = data.map((item) => ({ "id" : item.id, "name" : item.name , "type" : item.type, "path" : item.path.split("/").slice(1).join("/") , "mode" : item.mode}))
        setLoadingFlag(false)
        await setData(data)

    }

    useEffect(() => {
        initialize()
    }, [])


    let toggleDisplay = (event) => {
        event.stopPropagation()
        for (let index = 1; index < event.currentTarget.childNodes.length; index++) {
            let element = event.currentTarget.childNodes[index]
            let classList = element.getAttribute('class').split(" ")
            if (classList.includes("d-block")) {
                element.classList.remove("d-block")
                element.classList.add("d-none")
            }
            else {
                element.classList.remove("d-none")
                element.classList.add("d-block")
            }
        }

    }

    let openBoard = (event, data) => {
        event.stopPropagation()
        console.log(data)
    }
    
    //-------------------------------------------------------------
    // HELPER FUNCTION TO TRAVERSE INSIDE
    //-------------------------------------------------------------
    const createNestedDOM = (path) => 
    {

        console.log("path : " + path)
        let array = data.filter(child => child.path.startsWith(path + '/'))
        
    
        console.log("array : " + JSON.stringify(array))
        console.log("current pathArray : " + JSON.stringify(pathArray))

        // Loop through array elements
        let element = array.map((item) => 
        {   
            console.log( " Current item : " + JSON.stringify(item) )
            
            if(!pathArray.includes(item.path))
            {
                pathArray.push(item.path) 

                if (item.type === "tree") 
                {
                    
                    console.log("pushing UL path  : " + item.path)            
                    return (<ul key={item.path} onClick={toggleDisplay} className={`${styles.boardPageList} my-2 py-2 px-0 d-none`}>
                            <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                            {createNestedDOM(item.path)}
                        </ul>);
                }
                else
                { 
                    
                    console.log("pushing LI path : " + item.path)
                    return (<li key={item.path} value={item.name} onClick={(e) => { openBoard(e, item.name) }} className={`${styles.boardPageListItem} d-none my-2 py-2`}>
                                {item.name} 
                            </li>)
                    
                }
            }
        });

        return element;
    };

    const createDirTree = () => 
    {
        rootNode.forEach((item) => 
        {
            let node = undefined;
            console.log("item from parent : " + JSON.stringify(item))
            pathArray.push(item.path)
            if (item.type === "tree") 
            {
                node = ( <ul key={item.path} onClick={toggleDisplay} className={`${styles.boardPageList} my-2 py-2 px-1`}>
                            <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                            {createNestedDOM(item.path)}
                        </ul>)
            } 
            else 
            {
                node =   (<li key={item.path} value={item.name} onClick={(e) => { openBoard(e, item.name) }} className={`${styles.boardPageListItem} my-2 py-2`}>
                            {item.name}
                        </li>)
            }

            console.log(node)
            nested.push(node)
            
        })
    }

    console.log("inputArray from outside" + JSON.stringify(data))
    //rootNode = data.map((item) => (item.path.split("/"))).filter((item) => (item.length == 1)).flat()

    for(let index=0; index < data.length; index++)
    {
        let obj = data[index]
        let arrPath = obj.path.split("/")
        if(arrPath.length == 1)
        {
            rootNode.push(obj)
        }
    }
    console.log("RootNodes : " + rootNode)
    createDirTree()

















    return (
        <div className="row h-100">
            <ul id="pageTree" className={`${styles.boardPageListBlock} shadow-sm col-2 px-2`}>

                {nested}

                {/* <ul value="List 1" onClick={toggleDisplay} className={`${styles.boardPageList} `}>
                    <div className='d-flex justify-content-between'><span>Page 1</span> <ChevronDown className='align-self-center' size={16} /></div>
                    
                    <ul value="List 1" onClick={toggleDisplay} className={`${styles.boardPageList}`}>
                        <div className='d-flex justify-content-between'><span>Page 1.1</span> <ChevronDown className='align-self-center' size={16} /></div>

                        <li value="Page 1" onClick={(e) => { openBoard(e, "Page 1 - 1") }} className={`${styles.boardPageListItem} d-none`}>
                            Page 1.1 - 1
                        </li>
                    </ul>
                    <li value="Page 1" onClick={(e) => { openBoard(e, "Page 1 - 1") }} className={`${styles.boardPageListItem} d-none`}>
                        Page 1 - 1
                    </li>
                    <li value="Page 1" onClick={(e) => { openBoard(e, "Page 1 - 2") }} className={`${styles.boardPageListItem} d-none`}>
                        Page 1 - 2
                    </li>
                </ul> 

                

                <div className={`${styles.boardPageListItem}`}>
                    Page
                </div>
                <div className={`${styles.boardPageListItem}`}>
                    Page
                </div>
                <div className={`${styles.boardPageListItem}`}>
                    Page
                </div> */}

            </ul>


            <div className="col-10 offset-2">
                <div className={`${styles.boardDisplay} px-5 py-3`}>
                    <div className={`${styles.boardDisplayTitle}`}>
                        Title
                    </div>
                    <div className={`${styles.boardDisplayAuthor}`}>
                        <span>shashnk kawle</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>3 Mar, 1997</span>
                    </div>
                    <div className="mt-4">
                        Lorem ipsum
                    </div>
                </div>
            </div>
        </div >
    )
}