/* eslint-disable */
'use client';

import { ArrowDownCircle, ArrowLeftCircle, ArrowUpCircle, CheckCircle, ChevronDown, Circle } from 'react-feather';
import styles from './filetree.module.css'
import { useState } from 'react';
import FiletreeItem from '../filetreeitem/filetreeitem';

export default function filetree({ listdata, topic, openPage }) {

    let data = listdata
    let pathArray = []
    let nested = [];

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

    let toggleListDisplay = () => {
        let element = document.getElementById("pageTree")
        let toggler = document.getElementById("pageTreeToggler")
        let classList = element.getAttribute('class').split(" ")
        if (classList.includes("d-block")) {
            element.classList.remove("d-block")
            element.classList.add("d-none")
            element.classList.add("d-none")
            toggler.style.transform = 'rotate(180deg)';
        }
        else {
            element.classList.remove("d-none")
            element.classList.add("d-block")
            toggler.style.transform = 'rotate(0deg)';
        }
        toggler.style.transition = '0.4s';
    }

    let openBoard = (event, data) => {
        event.stopPropagation()
        openPage(topic + "/" + data)
    }

    //-------------------------------------------------------------
    // HELPER FUNCTIONS
    //-------------------------------------------------------------
    const createNestedDOM = (path) => {

        let array = data.filter(child => child.path.startsWith(path + '/'))
        //console.log("current pathArray : " + JSON.stringify(pathArray))

        // Loop through array elements
        let element = array.map((item) => {
            //console.log( " Current item : " + JSON.stringify(item) )
            if (!pathArray.includes(item.path)) 
            {
                pathArray.push(item.path)
                if (item.type === "tree") 
                {
                    //console.log("pushing UL path  : " + item.path)            
                    return (<ul key={item.path} onClick={toggleDisplay} className={`${styles.fileList} my-2 py-2 px-1 d-none`}>
                        <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                        {createNestedDOM(item.path)}
                    </ul>);
                }
                else 
                {
                    //console.log("pushing LI path : " + item.path)
                    return (<li key={item.path} value={item.path} onClick={(e) => { openBoard(e, item.path) }} className={`${styles.fileListItem} d-none my-2 py-2`}>
                        <FiletreeItem itemText={item.name}/>
                    </li>)
                }
            }
        });

        return element;
    };

    const objModifier = (obj) => 
    {
      let arrTemp = obj.path.split("/")
      obj.level = arrTemp.length
      return obj
    }

    //-------------------------------------------------------------
    // END HELPER FUNCTIONS
    //-------------------------------------------------------------

    const createDirTree = (arrData) => {
        arrData.forEach((item) => {
            let node = undefined;
            if (!pathArray.includes(item.path)) 
            {
                pathArray.push(item.path)
                //console.log(pathArray)
                if (item.type === "tree") {
                    node = (<ul key={item.path} onClick={toggleDisplay} className={`${styles.fileList} my-2 py-2 px-1`}>
                        <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                        {createNestedDOM(item.path)}
                    </ul>)
                }
                else {
                    node = (<li key={item.path} value={item.path} onClick={(e) => { openBoard(e, item.path) }} className={`${styles.fileListItem} my-2 py-2`}>
                        <FiletreeItem itemText={item.name}/>
                    </li>)
                }
            }

            nested.push(node)
        })
    }

    //console.log("inputArray from outside" + JSON.stringify(data))
    if (data != undefined) 
    {
        data = data.map(objModifier)
        data = data.sort((a,b) => ( a.path.localeCompare(b.path) || a.level > b.level ))
        createDirTree(data)
    }


    return (
        <div className={`${styles.fileListBlock} col-sm-12 col-md-4 col-xl-4 px-2 my-1 z-2 shadow-sm`}>
            <ArrowUpCircle id="pageTreeToggler" size={20} className={`${styles.fileListToggleBtn} mx-2 my-2`} onClick={toggleListDisplay} />
            <div id="pageTree" className='d-block'>
                <ul className='p-0' style={{'listStyleType' : 'none'}}>
                    {nested}
                </ul>
            </div>
        </div>
    )
}