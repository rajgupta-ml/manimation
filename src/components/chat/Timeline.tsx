'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
	ChevronDown,
	ChevronRight,
	Eye,
	EyeOff,
	Plus,
	Video,
	Volume2,
	VolumeX,
} from 'lucide-react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ITrack {
	id: string;
	name: string;
	type: 'video' | 'audio';
	clips: IClip[];
	isVisible: boolean;
	isMuted?: boolean;
}

interface IClip {
	id: string;
	name: string;
	type: 'video' | 'audio';
	duration: number;
	startTime: number;
	endTime: number;
	thumbnail?: string;
	waveform?: string;
	color?: string;
}

interface TimelineProps {
	selectedScene: number | null;
	onSceneSelect: (sceneId: number) => void;
	isCollapsed: boolean;
	onToggleCollapse: () => void;
}

const Timeline = ({
	selectedScene,
	onSceneSelect,
	isCollapsed,
	onToggleCollapse,
}: TimelineProps) => {
	const [tracks, setTracks] = useState<ITrack[]>([
		{
			id: 'video-1',
			name: 'Video Track 1',
			type: 'video',
			isVisible: true,
			clips: [
				{
					id: 'v1',
					name: 'Scene 1',
					type: 'video',
					duration: 15,
					startTime: 0,
					endTime: 15,
					thumbnail: '/placeholder.svg?height=60&width=80',
					color: '#3b82f6',
				},
				{
					id: 'v2',
					name: 'Scene 2',
					type: 'video',
					duration: 18,
					startTime: 35,
					endTime: 53,
					thumbnail: '/placeholder.svg?height=60&width=80',
					color: '#8b5cf6',
				},
			],
		},
		{
			id: 'audio-1',
			name: 'Audio Track 1',
			type: 'audio',
			isVisible: true,
			isMuted: false,
			clips: [
				{
					id: 'a1',
					name: 'Background Music',
					type: 'audio',
					duration: 69,
					startTime: 0,
					endTime: 69,
					color: '#10b981',
					waveform: 'waveform-data',
				},
				{
					id: 'a2',
					name: 'Voice Over',
					type: 'audio',
					duration: 20,
					startTime: 15,
					endTime: 35,
					color: '#f59e0b',
					waveform: 'waveform-data',
				},
			],
		},
	]);

	const addTrack = (type: 'video' | 'audio') => {
		const newTrack: ITrack = {
			id: `${type}-${Date.now()}`,
			name: `${type === 'video' ? 'Video' : 'Audio'} Track ${tracks.filter((t) => t.type === type).length + 1}`,
			type,
			isVisible: true,
			isMuted: type === 'audio' ? false : undefined,
			clips: [],
		};
		setTracks([...tracks, newTrack]);
	};

	const toggleTrackVisibility = (trackId: string) => {
		setTracks(
			tracks.map((track) =>
				track.id === trackId ? { ...track, isVisible: !track.isVisible } : track
			)
		);
	};

	const toggleTrackMute = (trackId: string) => {
		setTracks(
			tracks.map((track) =>
				track.id === trackId && track.type === 'audio'
					? { ...track, isMuted: !track.isMuted }
					: track
			)
		);
	};

	if (isCollapsed) {
		return (
			<div className="border-t border-b p-2">
				<div className="flex justify-center">
					<Button variant="ghost" size="sm" onClick={onToggleCollapse}>
						<ChevronRight className="w-4 h-4 mr-2" />
						Show Timeline
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="text-foreground">
			<div className="flex items-center justify-between p-3 border-b ">
				<h3 className="font-semibold">Timeline</h3>
				<div className="flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm" className="">
								<Plus className="w-4 h-4 mr-2" />
								Add Track
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="">
							<DropdownMenuItem onClick={() => addTrack('video')} className="">
								<Video className="w-4 h-4 mr-2" />
								Video Track
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => addTrack('audio')} className="">
								<Volume2 className="w-4 h-4 mr-2" />
								Audio Track
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button
						variant="ghost"
						size="sm"
						onClick={onToggleCollapse}
						className=""
					>
						<ChevronDown className="w-4 h-4" />
					</Button>
				</div>
			</div>

			<div className="p-0">
				<div className="flex">
					{/* Track Labels */}
					<div className="w-48 ">
						<h1 className="pt-3 pl-3 text-sm">Tracks</h1>
						{tracks.map((track) => (
							<div
								key={track.id}
								className="h-20 border-b flex items-center px-4"
							>
								<div className="flex items-center gap-2 flex-1">
									{track.type === 'video' ? (
										<Video className="w-4 h-4 " />
									) : (
										<Volume2 className="w-4 h-4" />
									)}
									<span className="text-sm font-medium truncate">
										{track.name}
									</span>
								</div>
								<div className="flex items-center gap-1">
									<Button
										variant="ghost"
										size="sm"
										onClick={() => toggleTrackVisibility(track.id)}
										className={`p-1 h-6 w-6 ${track.isVisible ? 'text-foreground' : ''}`}
									>
										{track.isVisible ? (
											<Eye className="w-3 h-3" />
										) : (
											<EyeOff className="w-3 h-3" />
										)}
									</Button>
									{track.type === 'audio' && (
										<Button
											variant="ghost"
											size="sm"
											onClick={() => toggleTrackMute(track.id)}
											className={`p-1 h-6 w-6 ${track.isMuted ? 'text-red-400' : 'text-white'}`}
										>
											{track.isMuted ? (
												<VolumeX className="w-3 h-3" />
											) : (
												<Volume2 className="w-3 h-3" />
											)}
										</Button>
									)}
								</div>
							</div>
						))}
					</div>

					{/* Timeline Content */}
					<div className="flex-1 overflow-x-auto">
						<div className="relative min-w-[800px]">
							{/* Time Ruler */}
							<div className="h-8 flex items-center px-2">
								{Array.from({ length: 8 }, (_, i) => (
									<div key={i} className="flex-1 text-xs  px-2">
										{i * 10}s
									</div>
								))}
							</div>

							{/* Tracks */}
							{tracks.map((track) => (
								<div
									key={track.id}
									className="h-20 border-b  relative bg-gray-850"
								>
									<div className="absolute inset-0 flex items-center px-2">
										{track.clips.map((clip) => (
											<div
												key={clip.id}
												className={`relative h-16 rounded cursor-pointer border-2 transition-all ${
													selectedScene === Number.parseInt(clip.id.slice(-1))
														? 'border-yellow-400 shadow-lg'
														: 'border-transparent hover:border-gray-500'
												}`}
												style={{
													width: `${(clip.duration / 69) * 100}%`,
													marginLeft: `${(clip.startTime / 69) * 100}%`,
													backgroundColor: clip.color + '40',
													borderColor:
														selectedScene === Number.parseInt(clip.id.slice(-1))
															? '#fbbf24'
															: clip.color,
												}}
												onClick={() =>
													onSceneSelect(Number.parseInt(clip.id.slice(-1)))
												}
											>
												{track.type === 'video' ? (
													<div className="h-full flex items-center justify-center  rounded">
														{/* <img
                            //   src={clip.thumbnail || "/placeholder.svg"}s
                              alt={clip.name}
                              className="h-12 w-16 object-cover rounded"
                            /> */}
														<div className="absolute bottom-1 left-1 text-xs bg-opacity-75 px-1 rounded">
															{clip.name}
														</div>
													</div>
												) : (
													<div className="h-full flex items-center justify-center relative overflow-hidden rounded">
														{/* Simulated Waveform */}
														<div className="flex items-center justify-center h-full w-full">
															{Array.from({ length: 20 }, (_, i) => (
																<div
																	key={i}
																	className="w-1 mx-px rounded"
																	style={{
																		height: `${Math.random() * 80 + 20}%`,
																		backgroundColor: clip.color,
																	}}
																/>
															))}
														</div>
														<div className="absolute bottom-1 left-1 text-xs bg-background p-1 bg-opacity-75 px-1 rounded">
															{clip.name}
														</div>
													</div>
												)}
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
