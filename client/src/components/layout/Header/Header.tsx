'use client'
import React, { useState } from 'react'
import s from './header.module.scss'
import { Container } from '@/components/shared/Container/Container'
import { Search } from '@/icons/search'
import { Layout } from '@/components/shared/Layout/Layout'
import cn from 'classnames'
export const Header = () => {
	const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false)

	return (
		<header className={s.header}>
			<Container>
				<div className={s.header_wrapper}>
					<input
						onFocus={() => setIsFocusedInput(true)}
						onBlur={() => setIsFocusedInput(false)}
						placeholder='Поиск'
						type='text'
						className={cn(
							s.header_search,
							isFocusedInput && s.header_search_active
						)}
					/>
					<Search className={s.header_icon} />
				</div>
			</Container>
			<Layout isActive={isFocusedInput} setActive={setIsFocusedInput} />
		</header>
	)
}
