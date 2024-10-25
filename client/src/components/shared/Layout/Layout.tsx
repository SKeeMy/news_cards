import React from 'react'
import { ILayoutProps } from './layout.interface'
import { FC } from 'react'
import s from './layout.module.scss'
import cn from 'classnames'

export const Layout: FC<ILayoutProps> = props => {
	const { isActive, setActive } = props
	return (
		<div
			onClick={() => setActive(false)}
			className={cn(s.layout, isActive && s.layout_active)}
		></div>
	)
}
