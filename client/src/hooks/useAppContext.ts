import {
	AppContextTypes,
	AppProviderTypes,
} from '@/types/appProvider.interface'

import { useContext, createContext } from 'react'

export const AppContext = createContext<AppContextTypes | null>(null)

export const useAppContext = () => {
	const context = useContext(AppContext)
	if (context === null) {
		throw new Error('useAppContext must be used within a AppProvider')
	}
	return context
}
