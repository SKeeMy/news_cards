import { Color } from '@/types/colors.type'
export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	addClass?: string
	color: Color
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	disabled: boolean
}
