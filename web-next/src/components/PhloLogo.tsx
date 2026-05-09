export function PhloLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src="/brand/phlo-logo.png"
      alt="Phlo"
      className={`h-10 w-auto object-contain mix-blend-multiply ${className}`}
    />
  )
}
