'use client'
import React from 'react'
import s from './home.module.scss'
import { Container } from '@/components/shared/Container/Container'

import { useState } from 'react'
import { Color } from '@/types/colors.type'
import { Button } from '@/components/shared/Button/Button'
import { ICardProps } from '@/components/shared/Card/card.interface'
import { Card } from '@/components/shared/Card/Card'
import { useAppContext } from '@/hooks/useAppContext'

export const Home = () => {
	const [colors, setColors] = useState<Array<Color>>([
		'green',
		'pink',
		'orange',
	])

	const { searchValue } = useAppContext()

	console.log(searchValue)

	const cards: ICardProps[] = [
		{
			image: '/images/1.png',
			color: 'green',
			shortText:
				'Скидка на технику Whirlpool, Indesit или Hotpoint - 50% на второй.',
			datePublish: '2020-06-18',
			slug: '#',
		},
		{
			image: '/images/2.png',
			color: 'green',
			shortText:
				'Скидка на технику Whirlpool, Indesit или Hotpoint - 50% на второй.',
			datePublish: '2020-06-18',
			slug: '#',
		},
		{
			image: '/images/3.png',
			color: 'green',
			shortText:
				'Скидка на технику Whirlpool, Indesit или Hotpoint - 50% на второй.',
			datePublish: '2020-06-18',
			slug: '#',
		},
		{
			image: '/images/4.png',
			color: 'green',
			shortText:
				'Скидка на технику Whirlpool, Indesit или Hotpoint - 50% на второй.',
			datePublish: '2020-06-18',
			slug: '#',
		},
		{
			image: '/images/5.png',
			color: 'green',
			shortText:
				'Скидка на технику Whirlpool, Indesit или Hotpoint - 50% на второй.',
			datePublish: '2020-06-18',
			slug: '#',
		},
	]
	const [buttonColor, setButtonColor] = useState<Color>('green')

	const handleButtonClick = (color: Color) => () => {
		setButtonColor(color)
		const randomPage = Math.floor(Math.random() * 10) + 1
		console.log(randomPage)
		console.log(color)
	}

	return (
		<section className={s.home}>
			<Container>
				<div className={s.home_grid}>
					{cards.map((card, idx) => (
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
				<div className={s.home_buttons}>
					<div className={s.home_buttons_wrapper}>
						{colors.map((color, idx) => (
							<Button
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
