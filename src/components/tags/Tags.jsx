import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTags } from '../../feature/tags/tagSlice';
import Tag from './Tag';
const Tags = () => {
	const { isLoading, isError, error, tags } = useSelector((state) => state.tags);
	const dispatch = useDispatch();

	console.log(isLoading);
	console.log(isError);
	console.log(error);
	useEffect(() => {
		dispatch(fetchTags());
	}, [dispatch]);

	return (
		<section>
			<div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
				{tags?.map((tag) => (
					<Tag tag={tag} key={tag.id} />
				))}
			</div>
		</section>
	);
};

export default Tags;
