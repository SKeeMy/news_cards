'use client'
import React, { useEffect, useState } from 'react'
import s from './header.module.scss'
import { Container } from '@/components/shared/Container/Container'
import { Search } from '@/icons/search'
import { Layout } from '@/components/shared/Layout/Layout'
import cn from 'classnames'
import { useAppContext } from '@/hooks/useAppContext'
import { useDebounce } from '@/hooks/useDebounce'
export const Header = () => {
	const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false)
	const { searchValue, setSearchValue } = useAppContext()

	const [inputValue, setInputValue] = useState(searchValue)
	const debouncedValue = useDebounce(inputValue, 200)
	useEffect(() => {
		setSearchValue(debouncedValue)
	}, [debouncedValue, setSearchValue])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	return (
		<header className={s.header}>
			<Container>
				<div className={s.header_wrapper}>
					<input
						onChange={handleChange}
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
