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


export interface IMessage {
  message: string
}

export interface IChat {
  userChat: IMessage
  ai: IMessage
}

export interface IScene {
  id: number
  name: string
  type: "audio" | "video"
  duration: string
  startTime: string
  endTime: string
  isActive: boolean
}
