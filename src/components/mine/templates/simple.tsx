import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { HeaderParts } from "@/components/mine/parts/header"
import { FooterParts } from "../parts/footer"
import { FadeinAnimation } from "@/components/mine/animation/fadein"
import { useTitle } from "@/hooks/title"

export function SimpleTemplate({ children, description }: { children?: React.ReactNode, description?: string }) {
  const { t } = useTranslation()
  const { title } = useTitle()

  return (
    <>
      <HeaderParts />
      <div className="min-h-svh px-4 flex flex-col items-center justify-center overflow-hidden">
        <FadeinAnimation className="w-full max-w-2xl gap-4 flex flex-col">
          <p className="text-2xl font-bold">{title}</p>
          
          {description && (
            <p className="text-md">{description}</p>
          )}

          {children}
          <Button className="w-fit" onClick={() => window.history.back()}>{t("main.goBack")}</Button>
        </FadeinAnimation>
      </div>
      <FooterParts />
    </>
  )
}
