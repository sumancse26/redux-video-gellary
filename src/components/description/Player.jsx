/* eslint-disable react/prop-types */
const Player = ({ video }) => {
	const { link, title } = video;

	return (
		<iframe
			width="100%"
			className="aspect-video"
			src={link}
			title={title}
			frameBorder=""
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen></iframe>
	);
};

export default Player;
