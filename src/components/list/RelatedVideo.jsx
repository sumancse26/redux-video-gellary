/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../feature/relatedVideos/relatedVideoSlice';
import SingleVideo from './SingleVideo';

const RelatedVideo = ({ id, tags }) => {
	const dispatch = useDispatch();
	const { videos } = useSelector((state) => state.relatedVideos);
	useEffect(() => {
		dispatch(fetchRelatedVideos({ id, tags }));
	}, [dispatch, id, tags]);
	return (
		<div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
			{videos?.map((item) => (
				<SingleVideo key={item.id} video={item} />
			))}
		</div>
	);
};

export default RelatedVideo;
