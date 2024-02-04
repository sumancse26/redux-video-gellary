import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideo from '../components/list/RelatedVideo';
import { fetchVideo } from '../feature/video/singleVideoSlice';

const Video = () => {
	const { video } = useSelector((state) => state.video);
	const { tags } = video;
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchVideo(id));
	}, [dispatch, id]);

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				<div className="grid grid-cols-3 gap-2 lg:gap-8">
					<div className="col-span-full w-full space-y-8 lg:col-span-2">
						<Player video={video} />
						<VideoDescription videoDescription={video} />
					</div>

					<RelatedVideo id={id} tags={tags} />
				</div>
			</div>
		</section>
	);
};

export default Video;
