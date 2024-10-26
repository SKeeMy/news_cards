import Image from 'next/image'
import React, { useState } from 'react'
import { FC } from 'react'
import s from './custom-image.module.scss'
import { ICustomImageProps } from './custom-image.interface'
import cn from 'classnames'

export const CustomImage: FC<ICustomImageProps> = props => {
	const { image, alt } = props
	const [loadingImage, setLoadingImage] = useState<boolean>(true)

	if (image)
		return (
			<>
				<Image
					style={
						loadingImage ? { filter: 'blur(25px)' } : { filter: 'blur(0px)' }
					}
					className={cn(s.image)}
					quality={loadingImage ? 1 : 100}
					onLoad={() =>
						setTimeout(() => {
							setLoadingImage(false)
						}, 500)
					}
					width={loadingImage ? 10 : 264}
					height={217}
					loading='lazy'
					alt={alt}
					src={image}
				/>
			</>
		)
	else {
		return <div className={s.empty}>NO IMG</div>
	}
}
