interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  }

  return (
    <svg
      viewBox="0 0 180 50"
      className={`${sizeClasses[size]} w-auto ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stylized "SoFiCo" script logo */}
      <text
        x="5"
        y="38"
        fontFamily="'Brush Script MT', 'Segoe Script', 'Bradley Hand', cursive"
        fontSize="42"
        fontWeight="400"
        letterSpacing="-1"
      >
        SoFiCo
      </text>
    </svg>
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <span 
      className={`font-serif italic tracking-tight ${className}`}
      style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
    >
      SoFiCo
    </span>
  )
}
