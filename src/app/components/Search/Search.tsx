"use client"

import React, { useState } from 'react'
import styles from './Search.module.css'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import { changeOrder, changeQuery, changeSize } from '@/redux/reducers/newsParamsSlice'
import { fetchAllNews } from '@/redux/actions/newsActions'


const Search = () => {
    const dispatch = useAppDispatch()
    const {params} = useAppSelector(state => state.paramsReducer)

    const [keyWord, setKeyword] = useState<string>('')
    const [order, setOrder] = useState<string | undefined>(params.orderBy)
    const [size, setSize] = useState<number>(params.size)
    
    const handleSelectChange = (event: any) => {
        setOrder(event.target.value); // Update the selected option in state
    };

    const submit = (e: any) => {
        e.preventDefault()

        dispatch(changeOrder(order))
        dispatch(changeSize(size))
        dispatch(changeQuery(keyWord))

        dispatch(fetchAllNews({
            page: params.page,
            orderBy: order,
            query: keyWord,
            size: size
        }))
    }

    return (
        <div className={styles.search_container}>
            <div className={styles.search_input}>
                <form className={styles.form}>
                    <input 
                        type='text'
                        name='keyword'
                        className={styles.input}
                        placeholder='Введите ключевое слово...'
                        value={keyWord}
                        onChange={(e) => setKeyword(e.target.value)}
                        />
                    <input
                        type='number'
                        name='size'
                        className={styles.input}
                        placeholder='10'
                        value={size}
                        onChange={(e: any) => setSize(e.target.value)}
                    />
                    <select value={order} onChange={handleSelectChange}>
                        <option value="">Select</option>
                        <option value="newest">Новые</option>
                        <option value="oldest">Старые</option>
                        <option value="relevance">Релевантные</option>
                    </select>
                    <button className={styles.find} onClick={submit} type='submit'>Найти</button>
                </form>
            </div>
        </div>
    )
}

export default Search