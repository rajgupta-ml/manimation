import ChatInterfaceLayout from '@/components/chat/ChatInterfaceLayout';
import ChatSidebar from '@/components/chat/ChatSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Chat = async () => {
	return (
		<div className="bg-background">
			<SidebarProvider defaultOpen={true}>
				<ChatSidebar></ChatSidebar>
				<ChatInterfaceLayout></ChatInterfaceLayout>
			</SidebarProvider>
		</div>
	);
};

export default Chat;
