import ChatInterfaceMain  from '@/components/chat/ChatInterfaceMain';
import  ChatSidebar  from '@/components/chat/ChatSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

const Chat = async () => {
	return (
		<div className="bg-background">
			<SidebarProvider defaultOpen={true} >
				<ChatSidebar></ChatSidebar>
				<ChatInterfaceMain></ChatInterfaceMain>
			</SidebarProvider>
		</div>
	);
};

export default Chat;
