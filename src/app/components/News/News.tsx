"use client"

import React, { useEffect, useState } from 'react'
import styles from './News.module.css'
import { Reem_Kufi } from 'next/font/google'
import NewsItem from '../NewsItem/NewsItem'
import INews from '@/app/models/INews'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { stat } from 'fs'
import { changePage } from '@/redux/reducers/newsParamsSlice'
import { fetchAllNews } from '@/redux/actions/newsActions'


const News = () => {
    const dispatch = useAppDispatch()
    const {newsList, loading} = useAppSelector(state => state.newsReducer)
    const {params} = useAppSelector(state => state.paramsReducer)

    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        console.log(currentPage)
        dispatch(changePage(currentPage))
        dispatch(fetchAllNews({...params, page: currentPage}))
    }, [currentPage])

    return (
        <div>
            {
                loading ? <div>Loading ...</div>
                :
                <div className={styles.news}>
                    {
                        newsList.map((item: INews) => (
                            <NewsItem 
                                key={item.id}
                                id={item.id}
                                img={item.fields?.thumbnail}
                                title={item.webTitle}
                                date={item.webPublicationDate}
                            />
                        ))
                    }
                </div>
            }
            <div className={styles.pagination}>
                <button disabled={loading} onClick={() => {
                    if (currentPage > 1) setCurrentPage(currentPage-1)
                }}>←</button>
                <p>{currentPage}</p>
                <button disabled={loading} onClick={() => {
                    if (currentPage < 50) setCurrentPage(currentPage+1)
                }}>→</button>
            </div>
        </div>
    )
}

export default News