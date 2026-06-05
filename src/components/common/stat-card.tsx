import { cn } from "@/lib/utils"

type StatCardProps = {
    label: string
    value: string | number
    sub: string
    className?: string
}

export function StatCard({label, value, sub, className }: StatCardProps) {

    return (
        <div className={cn('flex flex-col gap-1 text-center rounded-xl px-5 py-4', 'bg-card border border-border', className)} >
          <p className={cn('text-sm', 'text-muted-foreground')}>{label}</p>
          <p className={cn('font-semibold', 'text-foreground text-2xl')}>{value}</p>
          <p className={cn('text-sm whitespace-nowrap','text-muted-foreground')}>{sub}</p>
        </div>
    )
}