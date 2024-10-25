import React from 'react'
import cn from 'classnames'
import s from './card.module.scss'
import { FC } from 'react'
import { ICardProps } from './card.interface'
import { CustomImage } from '../CustomImage/CustomImage'
import { Pig } from '@/icons/pig'
import { formatDate } from '@/helpers/DateFormater'
import { Fire } from '@/icons/fire'
import { Bonus } from '@/icons/bonus'

export const Card: FC<ICardProps> = props => {
	const { image, color, shortText, slug, datePublish } = props
	console.log(image)
	const cardColor = cn(s.card_body_type, {
		[s.pink]: color === 'pink',
		[s.orange]: color === 'orange',
		[s.green]: color === 'green',
	})

	const renderCardType = () => {
		if (color === 'green') {
			return (
				<span className={s.bottom_wrapper}>
					<span className={s.card_icon}>
						<Pig />
					</span>
					{formatDate(datePublish)}
				</span>
			)
		}
		if (color === 'orange') {
			return (
				<span className={s.bottom_wrapper}>
					<span className={s.card_icon}>
						<Fire />
					</span>
					{formatDate(datePublish)}
				</span>
			)
		}
		if (color === 'pink') {
			return (
				<span className={s.bottom_wrapper}>
					<span className={s.card_icon}>
						<Bonus />
					</span>
					{formatDate(datePublish)}
				</span>
			)
		}
	}

	return (
		<div className={s.card}>
			<div className={s.card_image}>
				<CustomImage image={image} alt='Изображение' />
			</div>
			<div className={s.card_body}>
				<p className={s.card_body_text}>{shortText}</p>
				<div className={cardColor}>{renderCardType()}</div>
			</div>
		</div>
	)
}
