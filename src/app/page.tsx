"use client"

import Image from 'next/image'
import styles from './page.module.css'
import News from './components/News/News'
import { fetchAllNews } from '../redux/actions/newsActions'
import { useAppDispatch } from '../redux/store'
import ReduxProvider from '../redux/provider'
import { useEffect } from 'react'
import Search from './components/Search/Search'

export default function Home() {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchAllNews({page: 1, size: 10}))
	}, [])

	return (
		<main className={styles.main}>
			<Search/>
			<News/>
		</main>
	)
}
