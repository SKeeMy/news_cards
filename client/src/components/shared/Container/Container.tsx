import React from 'react'
import { FC } from 'react'
import { IContainerProps } from './container.interface'
import cn from 'classnames'

export const Container: FC<IContainerProps> = ({ children, className }) => {
	return <div className={cn(className, 'container')}>{children}</div>
}
