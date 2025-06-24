'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import ChatInterface from './ChatInterface';
import VideoInterface from './VideoInterface';
import Controller from './Controller';
import Timeline from './Timeline';

const ChatInterfaceLayout = () => {
	const [selectedScene, setSelectedScene] = useState<number | null>(null);

	const [isTimelineCollapsed, setIsTimelineCollapsed] = useState(false);

	return (
		<div className="flex flex-col w-full p-4 h-screen max-h-screen gap-2">
			<ChatInterfaceHeader />
			<div className="flex w-full flex-1 gap-2 overflow-hidden ">
				<div
					className={` bg-card shadow-card border rounded-2xl transition-all duration-300 w-[40%] `}
				>
					<ChatInterface selectedScene={selectedScene} />
				</div>

				<div className={`transition-all duration-300 w-[60%] `}>
					<VideoInterface />
				</div>
			</div>
			<Controller />
			<Timeline
				selectedScene={selectedScene}
				onSceneSelect={setSelectedScene}
				isCollapsed={isTimelineCollapsed}
				onToggleCollapse={() => setIsTimelineCollapsed(!isTimelineCollapsed)}
			/>
		</div>
	);
};

const ChatInterfaceHeader = () => {
	return (
		<div className="flex items-center">
			<SidebarTrigger />
			<div className="w-full flex gap-4 justify-end">
				<Button variant={'outline'}>Share</Button>
				<Button>Export</Button>
			</div>
		</div>
	);
};

export default ChatInterfaceLayout;
