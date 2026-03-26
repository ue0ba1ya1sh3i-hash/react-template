// This file is a part for creating a settings page.

export function ParentSettingsParts({ children, ...props }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-background border-2 dark:border-0 dark:bg-foreground/4 rounded-xl"
      {...props}
    >
      {children}
    </div>
  )
}
