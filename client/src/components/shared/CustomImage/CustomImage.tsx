import Image from 'next/image'
import React from 'react'
import { FC } from 'react'
import s from './custom-image.module.scss'
import { ICustomImageProps } from './custom-image.interface'
export const CustomImage: FC<ICustomImageProps> = props => {
	const { image, alt } = props
	if (image) return <Image fill objectFit='cover' alt={alt} src={image} />
	else {
		return <div className={s.empty}></div>
	}
}
