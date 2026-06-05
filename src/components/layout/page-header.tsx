type PageHeaderProps = {
    title: string
    description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="font-semibold text-2xl text-foreground">{title}</h1>
        <p className="text-sm mt-1 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
