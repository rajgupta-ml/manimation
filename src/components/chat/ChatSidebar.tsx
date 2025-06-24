'use client';

import React, { useState } from 'react';
import { MessageSquare, Plus, User } from 'lucide-react';
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
import { IChatThread } from './types';
import ChatThread from './ChatThread';

function ChatSidebar() {
	const { state } = useSidebar();
	const [chatThreads, setChatThreads] = useState<IChatThread[]>([
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
		{
			id: '7',
			title: 'React Sidebar Link Component',
			timestamp: '2 weeks ago',
		},
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
	]);

	const handleDeleteChat = (id: string) => {
		setChatThreads((prev) => prev.filter((chat) => chat.id !== id));
	};

	const handleRenameChat = (id: string, newTitle: string) => {
		setChatThreads((prev) =>
			prev.map((chat) => (chat.id === id ? { ...chat, title: newTitle } : chat))
		);
	};

	const handleAddChat = () => {
		const newChatThread: IChatThread = {
			id: chatThreads[0].id + 1,
			title: 'New Chat',
			timestamp: new Date().toString(),
		};
		setChatThreads([newChatThread, ...chatThreads]);
	};

	return (
		<Sidebar className="border-r border-border/40 " >
			<SidebarHeader className="border-b border-border/40 p-4">
				<div className={`flex items-center` }>
					{state === 'expanded' && <Logo width={150} />}
				</div>
			</SidebarHeader>

			<SidebarContent className="p-2">
				<SidebarGroup >
					<SidebarGroupContent>
						<Button
							size={'sm'}
							className=" w-full flex rounded-2xl bg-primary text-white cursor-pointer hover:bg-primary/85"
							onClick={handleAddChat}
						>
							<Plus className="h-2 w-2 cursor-pointer"  />
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
										handleDeletChat={handleDeleteChat}
										handleRenameChat={handleRenameChat}
									/>
								))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-t border-border/40 p-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton className={`w-full ${state !== "expanded" ? "flex items-center justify-center" : ""}`}>
									<Avatar className="h-8 w-8 cursor-pointer">
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
			</SidebarFooter>
		</Sidebar>
	);
}

export default ChatSidebar