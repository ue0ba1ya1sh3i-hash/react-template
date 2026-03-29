import { SimpleTemplate } from "@/components/mine/templates/simple"
import { useTranslation } from "react-i18next"

export default function App() {
  const { t } = useTranslation()

  return (
    <SimpleTemplate description={t("pages.index.description")} />
  )
}
