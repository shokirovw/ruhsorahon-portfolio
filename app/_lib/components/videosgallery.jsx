'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function VideosGallery ({ videos }) {
	return (
		<Splide aria-label="My Favorite Images" options={{ height: 400 }}>
			{videos.map((video, i) => {
				return (
					<SplideSlide key={i}>
					    <iframe width="768" height="400" className="w-full rounded-lg aspect-video" src={video.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				  	</SplideSlide>
				)
			})}
		</Splide>
	);
}