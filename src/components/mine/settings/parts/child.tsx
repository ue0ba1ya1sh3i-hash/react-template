// This file is a part for creating a settings page.

export function ChildSettingsParts({ children, isFlex }: { children: React.ReactNode, isFlex?: boolean }) {
  return (
    <div className={`flex gap-2 ${isFlex ? "items-center" : "flex-col"}`}>
      {children}
    </div>
  )
}
