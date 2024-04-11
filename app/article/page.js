/* eslint-disable */
'use client';

import { useSearchParams } from 'next/navigation';
import ArticleDisplay from '@/components/articledisplay/articledisplay'


export default function article() {

    const query = useSearchParams();
    let articleId = query.get('id')
    let article = query.get('topic')
    

    return (
        <ArticleDisplay currentArticleId={articleId} currentArticleTopic={article} />
    )    
}