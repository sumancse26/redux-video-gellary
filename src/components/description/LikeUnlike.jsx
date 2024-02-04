/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import likeImage from '../../assets/like.svg';
import unlikeImage from '../../assets/unlike.svg';
const LikeUnlike = () => {
	const { video } = useSelector((state) => state.video);
	const { likes, unlikes } = video;

	return (
		<div className="flex gap-10 w-48">
			<div className="flex gap-1">
				<div className="shrink-0">
					<img className="w-5 block" src={likeImage} alt="Like" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
			</div>
			<div className="flex gap-1">
				<div className="shrink-0">
					<img className="w-5 block" src={unlikeImage} alt="Unlike" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">{unlikes}</div>
			</div>
		</div>
	);
};

export default LikeUnlike;
