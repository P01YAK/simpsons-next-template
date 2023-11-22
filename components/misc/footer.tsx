import PreviewLink from './preview-link'

const Footer = () => {
	return (
		<footer className='bg-neutral-50 border-t border-neutral-200'>
			<div className='container mx-auto px-5'>
				<div className='py-20 flex flex-col lg:flex-row items-center'>
					<h3 className='text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2'>
						<PreviewLink href='/seasons/seasons'>Можешь читать</PreviewLink>, а
						можешь и нет.
					</h3>
					<div className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'>
						<a
							href='/home'
							className='mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0'
						>
							Вернуться на главную
						</a>
						<a
							href={`https://t.me/something4something`}
							className='mx-3 font-bold hover:underline'
							target='blank'
						>
							Подпишись на телегу ёмаё.
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
