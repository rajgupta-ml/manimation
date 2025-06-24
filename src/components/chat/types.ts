export interface IChatThread {
	id: string;
	title: string;
	timestamp: string;
}

export interface IChatThreadComponet {
	data: IChatThread;
	handleRenameChat: (id: string, title: string) => void;
	handleDeletChat: (id: string) => void;
}
