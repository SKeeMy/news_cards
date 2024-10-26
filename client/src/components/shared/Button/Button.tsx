import React from 'react'
import cn from 'classnames'
import s from './button.module.scss'
import { FC } from 'react'
import { IButtonProps } from './button.interface'
import { Fire } from '@/icons/fire'
import { Pig } from '@/icons/pig'
import { Bonus } from '@/icons/bonus'
import { Loader } from '../Loader/Loader'

export const Button: FC<IButtonProps> = props => {
	const { addClass, color, onClick, disabled } = props

	const renderIcon = () => {
		return color === 'green' ? (
			<Pig />
		) : color === 'orange' ? (
			<Fire />
		) : (
			<Bonus />
		)
	}

	const buttonColor = cn(s.button, addClass, {
		[s.pink]: color === 'pink',
		[s.orange]: color === 'orange',
		[s.green]: color === 'green',
	})
	return (
		<button
			onClick={onClick}
			className={cn(buttonColor, disabled && s.disabled)}
		>
			{disabled ? (
				<span className={s.icon_wrapper}>
					<Loader />
				</span>
			) : (
				<>
					Загрузить <span className={s.icon_wrapper}>{renderIcon()}</span>
				</>
			)}
		</button>
	)
}
