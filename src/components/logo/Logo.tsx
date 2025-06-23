interface AnimateLogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo ({ className = "", width = 120, height = 32 }: AnimateLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 240 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definition for the O */}
      <defs>
        <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0080" />
          <stop offset="50%" stopColor="#FF1493" />
          <stop offset="100%" stopColor="#E91E63" />
        </linearGradient>
      </defs>

      {/* Animate text */}
      <text
        x="0"
        y="48"
        fontSize="42"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        className="fill-gray-900 dark:fill-white"
      >
        Animate
      </text>

      {/* O letter with gradient */}
      <text
        x="176"
        y="50"
        fontSize="48"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="url(#pinkGradient)"
      >
        O
      </text>
    </svg>
  )
}
