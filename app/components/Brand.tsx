type BrandProps = { inverse?: boolean; compact?: boolean }

export default function Brand({ inverse = false, compact = false }: BrandProps) {
  return (
    <span className={`brand ${inverse ? "brand--inverse" : ""}`} aria-label="NeuralNext AI Solution">
      <span className="brand-mark" aria-hidden="true">
        N
      </span>
      <span className="brand-copy">
        <strong>NeuralNext</strong>
        {!compact ? <small>AI Solution</small> : null}
      </span>
    </span>
  )
}
