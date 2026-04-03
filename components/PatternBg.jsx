export function PatternBg({ type = 'wave', className = '' }) {
  return (
    <div
      className={`absolute inset-0 ${
        type === 'wave' ? 'wave-pattern' : 'grid-pattern'
      } ${className}`}
    />
  )
}
