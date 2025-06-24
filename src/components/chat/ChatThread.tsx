'use client';
import { memo, useState } from 'react';
import { SidebarMenuItem } from '../ui/sidebar';
import { X } from 'lucide-react';
import { IChatThreadComponet } from './types';

const ChatThread = memo<IChatThreadComponet>(
	({ data, handleRenameChat, handleDeletChat }) => {
		const [hover, setHover] = useState(false);
		const [isEditing, setEditing] = useState(false);
		const [title, setTitle] = useState<string>('New Chat');
		const handleKeyDown = (e: React.KeyboardEvent) => {
			if (e.key == 'Enter' || e.key == 'Escape') {
				handleRenameChat(data.id, title);
				setEditing(false);
			}
		};

		return (
			<SidebarMenuItem key={data.id}>
				<div
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					className={`flex items-center p-2 hover:bg-primary text-foreground cursor-pointer rounded-md group relative `}
				>
					{!isEditing ? (
						<span
							onDoubleClick={() => setEditing(true)}
							className="truncate flex-1 text-sm"
						>
							{data.title}
						</span>
					) : (
						<input
							autoFocus={true}
							defaultValue={data.title}
							onChange={(e) => setTitle(e.target.value)}
							onKeyDown={(e) => handleKeyDown(e)}
							onBlur={() => setEditing(false)}
						></input>
					)}

					{hover && (
						<X className="w-4 h-4" onClick={() => handleDeletChat(data.id)}></X>
					)}
				</div>
			</SidebarMenuItem>
		);
	}
);

ChatThread.displayName = 'ChatThread';

export default ChatThread;
