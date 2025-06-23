import { Send } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-6'>
        <div className='max-w-2xl  text-center flex flex-col gap-2'>
        <h1 className='text-6xl text-primary '>    
              "One Prompt. Infinite Animated Stories."
        </h1>
        <h3 className='text-primary-foreground/90 text-sm '> Generate scripts, animate them scene by scene, and edit every detail</h3>
        </div>
        <div className='flex border-2 rounded-xl  max-w-xl w-full justify-between items-center p-2 bg-background'>
            <textarea className='w-full outline-none'>
            </textarea>
                <button className=' px-3 py-2 hover:bg-accent rounded-sm'>
                    <Send className='text-primary w-4 h-4'></Send>
                </button>

        </div>
        <p className='text-xs text-primary-foreground/80'>Powered by <span className='text-primary'>Gemini 2.5 Flash</span> and <span className='text-primary'>Manim</span>.</p>
    </div>
  )
}

export default Hero