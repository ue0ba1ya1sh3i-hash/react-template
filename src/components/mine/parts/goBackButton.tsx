import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { useNavigate } from "@/router"
import type { ComponentProps } from "react"

type GoBackButtonPartsProps = Omit<ComponentProps<typeof Button>, "onClick">

export function GoBackButtonParts({ children, ...props }: GoBackButtonPartsProps) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGoBack = () => {
    let isFromSameSite = false
    try {
      isFromSameSite =
        document.referrer !== "" &&
        new URL(document.referrer).hostname === window.location.hostname
    } catch {
      isFromSameSite = false
    }
    if (isFromSameSite) {
      navigate(-1)
    } else {
      navigate("/")
    }
  }

  return (
    <Button onClick={handleGoBack} {...props}>
      {children ?? t("main.goBack")}
    </Button>
  )
}
