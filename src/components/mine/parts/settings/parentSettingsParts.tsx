// This file is a part for creating a settings page.

import { FadeinAnimation } from "@/components/mine/animation"

export function ParentSettingsParts({ children }: { children: React.ReactNode }) {
  return (
    <FadeinAnimation className="flex flex-col gap-4 p-4 bg-background border-2 dark:border-0 dark:bg-foreground/4 rounded-xl">
      {children}
    </FadeinAnimation>
  )
}
