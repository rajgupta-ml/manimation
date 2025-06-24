import { Card, CardContent } from '../ui/card';

const VideoInterface = () => {
	return (
		<Card className="h-full">
			<CardContent className="p-0 h-full">
				<video
					className="w-full h-full  object-contain rounded-lg"
					autoPlay
					muted
					loop
				>
					<source src="/video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</CardContent>
		</Card>
	);
};

export default VideoInterface;
