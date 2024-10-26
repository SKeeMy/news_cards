'use client'
import React, { useCallback, useEffect } from 'react'
import s from './home.module.scss'
import { Container } from '@/components/shared/Container/Container'

import { useState } from 'react'
import { Color } from '@/types/colors.type'
import { Button } from '@/components/shared/Button/Button'
import { ICardProps } from '@/components/shared/Card/card.interface'
import { Card } from '@/components/shared/Card/Card'
import { useAppContext } from '@/hooks/useAppContext'
import axios from 'axios'
import { IApiNewsResponse } from '@/types/apiNews.interface'
import { CardSkeleton } from '@/components/shared/Card/ui/Card-skeleton'

const colors: Color[] = ['green', 'pink', 'orange']

export const Home = () => {
	const { searchValue } = useAppContext()
	const [newsData, setNewsData] = useState<ICardProps[]>([])
	const [loadedPages, setLoadedPages] = useState<{ [key: number]: Color }>({})
	const [disabledBtns, setDisabledBtns] = useState<boolean>(false)
	const [loadingUI, setLoadingUi] = useState<boolean>(true)

	useEffect(() => {
		fetchNews(7, 'green')
	}, [])

	const fetchNews = async (pageNum: number, color: Color) => {
		try {
			const response = await axios.get<IApiNewsResponse>(
				`https://domotekhnika.ru/api/v1/news?page=${pageNum}`
			)
			const newNews = response.data.data.news.map(item => ({
				image: item.image,
				shortText: item.shortText,
				slug: item.slug,
				datePublish: item.datePublish,
				color: color,
				pageNum: pageNum,
			}))

			setLoadedPages(prev => ({ ...prev, [pageNum]: color }))
			updateNewsData(newNews)
			setDisabledBtns(false)
			setLoadingUi(false)
		} catch (error) {
			console.error('Error fetching news', error)
			setDisabledBtns(false)
		}
	}

	const updateNewsData = (newNews: ICardProps[]) => {
		setNewsData(prevNews => {
			const allNews = [...prevNews, ...newNews]
			return allNews.sort((a, b) => a.pageNum - b.pageNum)
		})
	}

	const handleButtonClick = useCallback(
		(color: Color) => () => {
			const randomPage = Math.floor(Math.random() * 10) + 1
			const cachedNews = loadedPages[randomPage]
			setDisabledBtns(true)

			if (cachedNews) {
				setNewsData(prevNews => {
					console.log('Этот цвет уже был => меняем цвет')
					setDisabledBtns(false)

					return prevNews.map(item =>
						item.pageNum === randomPage ? { ...item, color } : item
					)
				})
			} else {
				fetchNews(randomPage, color)
			}
		},
		[loadedPages]
	)

	const filteredNewsData = newsData.filter(item =>
		item.shortText.toLowerCase().includes(searchValue.toLowerCase())
	)

	return (
		<section className={s.home}>
			<Container>
				{loadingUI ? (
					<div className={s.home_grid}>
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
						<CardSkeleton />
					</div>
				) : (
					<div className={s.home_grid}>
						{filteredNewsData.map((card, idx) => (
							<Card
								key={idx}
								color={card.color}
								shortText={card.shortText}
								slug={card.slug}
								image={card.image}
								datePublish={card.datePublish}
							/>
						))}
					</div>
				)}

				<div className={s.home_buttons}>
					<div className={s.home_buttons_wrapper}>
						{colors.map((color, idx) => (
							<Button
								disabled={disabledBtns}
								onClick={handleButtonClick(color)}
								key={idx}
								color={color}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}
