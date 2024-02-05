import { useDispatch, useSelector } from 'react-redux';
import { tagsRemoved, tagsSelected } from '../../feature/filter/filterReducer';

/* eslint-disable react/prop-types */
const Tag = ({ tag }) => {
	const { title } = tag;
	const dispatch = useDispatch();
	const { tags } = useSelector((state) => state.filter);
	const isInclude = tags.includes(title);
	const selectTagHandler = () => {
		isInclude ? dispatch(tagsRemoved(title)) : dispatch(tagsSelected(title));
	};
	return (
		<div
			className={
				!isInclude
					? 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'
					: 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
			}
			onClick={selectTagHandler}>
			{title}
		</div>
	);
};

export default Tag;
