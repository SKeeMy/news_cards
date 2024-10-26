export interface AppProviderTypes {
	children: React.ReactNode
}

export interface AppContextTypes {
	searchValue: string
	setSearchValue: React.Dispatch<React.SetStateAction<string>>
}
