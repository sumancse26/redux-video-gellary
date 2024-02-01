import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../feature/videos/videoSlice';
import SingleVideo from './SingleVideo';

const Video = () => {
	const { isLoading, error, videos } = useSelector((state) => state.videos);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchVideos());
	}, [dispatch]);
	console.log('isLoading', isLoading);
	console.log('error', error);
	console.log('videos', videos);
	return (
		<section className="pt-12">
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
					{/* <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
						<div className="w-full flex flex-col"> */}
					{videos.map((video) => (
						<SingleVideo key={video.id} video={video} />
					))}
					{/* </div>}
					<SingleVideo />
					{/* </div>
					</div> */}

					{/* <div className="col-span-12">some error happened</div> */}
				</div>
			</section>
		</section>
	);
};

export default Video;
