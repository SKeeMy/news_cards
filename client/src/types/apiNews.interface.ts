interface IApiNewsItem {
	image: string
	shortText: string
	slug: string
	datePublish: string
}
export interface IApiNewsResponse {
	data: {
		news: IApiNewsItem[]
	}
}
