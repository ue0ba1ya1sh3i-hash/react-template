// This page is privacy page.

import { errorLog } from "@/lib/log"
import { useFirestore } from "@/hooks/firestore"
import { useTranslation } from "react-i18next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SimpleTemplate } from "@/components/mine/templates/simple"

function Terms() {
  const { t } = useTranslation()

  const { value, loading, error } = useFirestore("public", "privacy")
  const privacyData = value?.data()

  if (loading) return null

  if (error) {
    errorLog(error)
    return <p>{t("common.error.main")}</p>
  }

  if (!privacyData) {
    return <p>{t("common.error.noData")}</p>
  }

  return (
    <Alert>
      <AlertTitle>
        {privacyData.content}
      </AlertTitle>

      <AlertDescription>
        {privacyData.date.toDate().toLocaleDateString()}
      </AlertDescription>
    </Alert>
  )
}

export default function App() {
  const { t } = useTranslation()

  return (
    <SimpleTemplate description={t("pages.privacy.description")}>
      <Terms />
    </SimpleTemplate>
  )
}
