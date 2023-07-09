import { AiOutlineClockCircle, AiOutlineRead } from 'react-icons/ai';

export default function ArticleList ({ articleslist }) {

	return (
		<div className="w-full max-h-max overflow-x-auto flex flex-col gap-y-6">
			{articleslist.map((article, i) => {
				return (
					<a href={"/blog/" + article.url_slug}>
						<div className="w-full rounded-xl h-fit px-6 bg-amber-100/80 border-2 border-[#324065] py-2 flex flex-row items-center">
							<div className="grow space-y-1">
								<h1 className="text-2xl font-heading">{i + 1}. {article.title}</h1>
								<div className="text-black/60 flex flex-row items-center gap-x-2"><AiOutlineClockCircle /><p className="text-base">{article.release_date}</p></div>
							</div>
							<div>
								<AiOutlineRead className="text-3xl text-[#324065]" />
							</div>
						</div>
					</a>	
				);
			})}
		</div>
	);
}