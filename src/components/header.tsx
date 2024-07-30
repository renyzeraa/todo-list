interface HeaderProps {
  title: string
  description: string
}

export function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <span className="text-zinc-300 text-sm">{description}</span>
    </div>
  )
}