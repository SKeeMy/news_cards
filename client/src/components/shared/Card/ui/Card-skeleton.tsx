import React from 'react'
import s from '../card.module.scss'
import cn from 'classnames'

export const CardSkeleton = () => {
	return (
		<div className={s.card}>
			<div className={cn(s.card_image, s.card_image_skeleton)}></div>
			<div className={cn(s.card_body, s.card_body_skeleton)}>
				<p className={cn(s.card_body_text, s.card_body_text_skeleton)}>
					<span className={s.skeleton_line}></span>
					<span className={s.skeleton_line}></span>
					<span className={s.skeleton_line}></span>
				</p>
				<div className={cn(s.card_body_type, s.card_body_type_skeleton)}>
					<span className={cn(s.bottom_wrapper, s.bottom_wrapper_skeleton)}>
						<span className={cn(s.card_icon, s.card_icon_skeleton)}></span>
						<span className={s.skeleton_line_date}></span>
					</span>
				</div>
			</div>
		</div>
	)
}
