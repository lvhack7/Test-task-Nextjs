import { useRouter } from 'next/router';
import styles from './page.module.css'
import { dateConverter } from '@/app/helpers/dateConverter';
import {convert} from 'html-to-text'

const getNewsData = async (id: any) => {

    const response = await fetch(
        `https://content.guardianapis.com/${id}?api-key=5879ea0f-c3a2-4a60-b17e-9736f13b3525&show-fields=thumbnail,headline,trailText,body`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
        }
    );
    const data = await response.json();
    return data.response.content;
}

export default async function NewsPage ({searchParams}: any) {
    console.log(searchParams)
    
    const data = await getNewsData(searchParams.id)

    const bodyText = convert(data.fields.body)

    return (
        <div className={styles.card}>
            <div className={styles.blog_card}>
                <img src={data.fields.thumbnail} style={{width: '100vw'}} alt="Blog Image" />
                <div className={styles.blog_content}>
                    <h2 className={styles.blog_title}>{data.webTitle}</h2>
                    <p className={styles.blog_date}>{`Дата: ${dateConverter(data.webPublicationDate)}`}</p>
                    <p className={styles.blog_text}>
                    {bodyText}
                    </p>
                    <a href={data.webUrl} className={styles.read_more}>
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}
