"use client"

import React, { FC } from 'react'
import styles from './NewsItem.module.css'
import INews from '@/app/models/INews'
import { dateConverter } from '@/app/helpers/dateConverter'
import Link from 'next/link'

interface INewsProps {
    id: string
    title: string
    date: string
    img: string
}

const NewsItem: FC<INewsProps> = ({ id, title, date, img }) => {

    const formattedDate = dateConverter(date)
    const formattedId = id.replaceAll('/', '-')

    return (
        <div className={styles.news_item}>
            <img src={img} />
            <div className={styles.content}>
                <p className={styles.date}>{formattedDate}</p>
                <p className={styles.title}>{title}</p>
                <Link href={{
                    pathname: `/news/${formattedId}`,
                    query: { id }}} className={styles.details}>Details → </Link>
            </div>
        </div>
    )
}

export default NewsItem