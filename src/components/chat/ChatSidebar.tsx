'use client';

import React, { useState } from 'react';
import {
	Edit,
	MessageSquare,
	MoreHorizontal,
	Plus,
	Star,
	Trash2,
	User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from '@/components/ui/sidebar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Logo } from '../logo/Logo';

interface IChatThread {
	id: string;
	title: string;
	timestamp: string;
}

const chatThreads: IChatThread[] = [
	{
		id: '1',
		title: 'Safe Async Error Handling in Type...',
		timestamp: '2 hours ago',
	},
	{
		id: '2',
		title: 'Loom Video Project Showcase Em...',
		timestamp: '1 day ago',
	},
	{
		id: '3',
		title: 'Student Codeforces Analytics Das...',
		timestamp: '2 days ago',
	},
	{ id: '4', title: 'Untitled', timestamp: '3 days ago' },
	{
		id: '5',
		title: 'Mongoose Cron Job Email Schedul...',
		timestamp: '1 week ago',
	},
	{
		id: '6',
		title: 'Mongoose Email Template TypeSc...',
		timestamp: '1 week ago',
	},
	{ id: '7', title: 'React Sidebar Link Component', timestamp: '2 weeks ago' },
	{
		id: '8',
		title: 'React Dashboard Student Data Fe...',
		timestamp: '2 weeks ago',
	},
	{
		id: '9',
		title: 'TypeScript Student ID Type Error',
		timestamp: '3 weeks ago',
	},
	{
		id: '10',
		title: 'UI Animation Enhancement Guide',
		timestamp: '3 weeks ago',
	},
];

const ChatThread = ({
	data,
	starredChats,
	onStarChat,
	onDeleteChat,
	onRenameChat,
}: {
	data: IChatThread;
	starredChats: Set<string>;
	onStarChat: (chatId: string, e: React.MouseEvent) => void;
	onDeleteChat: (chatId: string, e: React.MouseEvent) => void;
	onRenameChat: (chatId: string, e: React.MouseEvent) => void;
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [hover, setHover] = useState(false);
	return (
		<SidebarMenuItem key={data.id}>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className={`flex items-center p-2 hover:bg-primary text-foreground cursor-pointer rounded-md group relative `}
			>
				<span className="truncate flex-1 text-sm">{data.title}</span>

				<DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
					<DropdownMenuTrigger asChild>
						{hover && (
							<Button
								variant="ghost"
								size="sm"
								className="h-6 w-6 p-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									setIsDropdownOpen(true);
								}}
							>
								<MoreHorizontal className="h-3 w-3" />
							</Button>
						)}
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="w-48"
						onCloseAutoFocus={(e) => e.preventDefault()}
					>
						<DropdownMenuItem
							onClick={(e) => {
								e.stopPropagation();
								onStarChat(data.id, e);
								setIsDropdownOpen(false);
							}}
						>
							<Star
								className={`mr-2 h-4 w-4 ${starredChats.has(data.id) ? 'fill-yellow-400 text-yellow-400' : ''}`}
							/>
							{starredChats.has(data.id) ? 'Unstar' : 'Star'}
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={(e) => {
								e.stopPropagation();
								onRenameChat(data.id, e);
								setIsDropdownOpen(false);
							}}
						>
							<Edit className="mr-2 h-4 w-4" />
							Rename
						</DropdownMenuItem>
						<DropdownMenuItem
							className="text-destructive focus:text-destructive"
							onClick={(e) => {
								e.stopPropagation();
								onDeleteChat(data.id, e);
								setIsDropdownOpen(false);
							}}
						>
							<Trash2 className="mr-2 h-4 w-4 text-destructive" />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</SidebarMenuItem>
	);
};

export function ChatSidebar() {
	const [starredChats, setStarredChats] = useState<Set<string>>(new Set());
	const { state } = useSidebar();

	const handleStarChat = (chatId: string, e: React.MouseEvent) => {
		e.stopPropagation();
		setStarredChats((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(chatId)) {
				newSet.delete(chatId);
			} else {
				newSet.add(chatId);
			}
			return newSet;
		});
	};

	const handleDeleteChat = (chatId: string, e: React.MouseEvent) => {
		e.stopPropagation();
		console.log('Delete chat:', chatId);
	};

	const handleRenameChat = (chatId: string, e: React.MouseEvent) => {
		e.stopPropagation();
		console.log('Handle Rename Chat:', chatId);
	};

	return (
		<Sidebar className="border-r border-border/40 bg-sidebar">
			<SidebarHeader className="border-b border-border/40 p-4">
				<div className="flex  gap-2">
					{state === 'expanded' && <Logo width={150} />}
				</div>
			</SidebarHeader>

			<SidebarContent className="p-2">
				<SidebarGroup>
					<SidebarGroupContent>
						<Button
							className="w-full justify-start gap-2 bg-primary text-white mb-4"
							onClick={() => {
								console.log('New chat clicked');
							}}
						>
							<Plus className="h-4 w-4" />
							{state === 'expanded' && 'New chat'}
						</Button>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel className="flex items-center gap-2 text-sidebar-foreground/70">
						<MessageSquare className="h-4 w-4" />
						{state === 'expanded' && 'Chats'}
					</SidebarGroupLabel>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel className="text-sidebar-foreground">
						{state === 'expanded' && 'Recents'}
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{state === 'expanded' &&
								chatThreads.map((data) => (
									<ChatThread
										key={data.id}
										data={data}
										starredChats={starredChats}
										onStarChat={handleStarChat}
										onDeleteChat={handleDeleteChat}
										onRenameChat={handleRenameChat}
									/>
								))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t border-border/40 p-4">
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton className="w-full justify-start">
									<Avatar className="h-6 w-6">
										<AvatarFallback className="bg-primary text-white text-xs">
											RG
										</AvatarFallback>
									</Avatar>
									{state === 'expanded' && (
										<div className="flex flex-col items-start">
											<span className="text-sm font-medium">Raj Gupta</span>
											<span className="text-xs text-sidebar-foreground/70">
												Free plan
											</span>
										</div>
									)}
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="top" className="w-56">
								<DropdownMenuItem>
									<User className="mr-2 h-4 w-4" />
									Profile
								</DropdownMenuItem>
								<DropdownMenuItem>Settings</DropdownMenuItem>
								<DropdownMenuItem>Sign out</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
