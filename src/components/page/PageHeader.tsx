export function PageHeader(
  {
    title,
    subtitle,
  }:
  {
    title: string
    subtitle?: string
  },
) {
  return (
    <div>
      <h1 className="h1 py-3">
        {title}
      </h1>
      { subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}
