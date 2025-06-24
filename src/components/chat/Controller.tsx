'use client';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

const Controller = () => {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div className="border-t border-b py-2">
			<div className="">
				<div className="flex justify-center gap-4 items-center">
					<Button
						size="icon"
						className="bg-accent text-foreground cursor-pointer rounded-full"
					>
						<SkipBack className="w-4 h-4" />
					</Button>
					<Button
						size="icon"
						onClick={() => setIsPaused(!isPaused)}
						className="bg-accent text-foreground cursor-pointer rounded-full"
					>
						{isPaused ? (
							<Play className="w-4 h-4" />
						) : (
							<Pause className="w-4 h-4" />
						)}
					</Button>
					<Button
						size="icon"
						className="bg-accent text-foreground cursor-pointer rounded-full"
					>
						<SkipForward className="w-4 h-4" />
					</Button>
					<div className="text-sm font-mono">
						00:10 / <span className="text-muted-foreground">1:09</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Controller;
