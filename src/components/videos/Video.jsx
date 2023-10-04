import SingleVideo from './SingleVideo';

const Video = () => {
	return (
		<section className="pt-12">
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
					{/* <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
						<div className="w-full flex flex-col"> */}
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
