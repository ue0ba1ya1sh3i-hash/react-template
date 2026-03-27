import { useTranslation } from "react-i18next"
import { HeaderParts } from "@/components/mine/parts/header"
import { FooterParts } from "../parts/footer"
import { FadeinAnimation } from "@/components/mine/animation/fadein"
import { useTitle } from "@/hooks/title"
import { GoBackButtonParts } from "@/components/mine/parts/goBackButton"

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
          <GoBackButtonParts className="w-fit" />
        </FadeinAnimation>
      </div>
      <FooterParts />
    </>
  )
}
