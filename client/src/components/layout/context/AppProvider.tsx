'use client'
import { AppProviderTypes } from '@/types/appProvider.interface'
import { FC } from 'react'
import { useState } from 'react'
import { AppContext } from '@/hooks/useAppContext'

export const AppProvider: FC<AppProviderTypes> = ({ children }) => {
	const [searchValue, setSearchValue] = useState<string>('')
	return (
		<AppContext.Provider value={{ searchValue, setSearchValue }}>
			{children}
		</AppContext.Provider>
	)
}
