/* eslint-disable */
'use client';

import { ChevronDown } from 'react-feather';
import styles from './filetree.module.css'

export default function filetree({listdata , topic , openPage}) {

    let data = listdata
    let pathArray = []
    let nested = [];
    let rootNode = [];

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
        openPage(topic + "/" + data)
    }

    const createNestedDOM = (path) => 
    {

       //console.log("path : " + path)
        let array = data.filter(child => child.path.startsWith(path + '/'))
        
    
        //console.log("array : " + JSON.stringify(array))
        //console.log("current pathArray : " + JSON.stringify(pathArray))

        // Loop through array elements
        let element = array.map((item) => 
        {   
            //console.log( " Current item : " + JSON.stringify(item) )
            
            if(!pathArray.includes(item.path))
            {
                pathArray.push(item.path) 

                if (item.type === "tree") 
                {
                    
                    //console.log("pushing UL path  : " + item.path)            
                    return (<ul key={item.path} onClick={toggleDisplay} className={`${styles.fileList} my-2 py-2 px-0 d-none`}>
                            <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                            {createNestedDOM(item.path)}
                        </ul>);
                }
                else
                { 
                    
                    //console.log("pushing LI path : " + item.path)
                    return (<li key={item.path} value={item.path} onClick={(e) => { openBoard(e, item.path) }} className={`${styles.fileListItem} d-none my-2 py-2`}>
                                {item.name} 
                            </li>)
                    
                }
            }
        });

        return element;
    };
    //-------------------------------------------------------------
    // END HELPER FUNCTION TO TRAVERSE INSIDE
    //-------------------------------------------------------------

    const createDirTree = () => 
    {
        rootNode.forEach((item) => 
        {
            let node = undefined;
            //console.log("item from parent : " + JSON.stringify(item))
            pathArray.push(item.path)
            if (item.type === "tree") 
            {
                node = ( <ul key={item.path} onClick={toggleDisplay} className={`${styles.fileList} my-2 py-2 px-1`}>
                            <div className='d-flex justify-content-between'><span>{item.name}</span> <ChevronDown className='align-self-center' size={16} /></div>
                            {createNestedDOM(item.path)}
                        </ul>)
            } 
            else 
            {
                node =   (<li key={item.path} value={item.path} onClick={(e) => { openBoard(e, item.path) }} className={`${styles.fileListItem} my-2 py-2`}>
                            {item.name}
                        </li>)
            }

            //console.log(node)
            nested.push(node)
            
        })
    }

    //console.log("inputArray from outside" + JSON.stringify(data))

    if (data != undefined) 
    {
        for(let index=0; index < data.length; index++)
        {
            let obj = data[index]
            let arrPath = obj.path.split("/")
            if(arrPath.length == 1)
            {
                rootNode.push(obj)
            }
        }
    
        //console.log("RootNodes : " + rootNode)
        createDirTree()
    }
   

    return (

        <ul id="pageTree" className={`${styles.fileListBlock} shadow-sm col-2 px-2`}>

            {nested}

        </ul>
    )
}