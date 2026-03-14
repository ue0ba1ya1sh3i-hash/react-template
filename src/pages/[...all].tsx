import { useTranslation } from "react-i18next"
import { SimpleTemplate } from "@/components/mine/templates"

export default function App() {
  const { t } = useTranslation()

  return (
    <SimpleTemplate title="404 | Not Found" description={t("pages.notfound.message")} />
  )
}
