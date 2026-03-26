import { errorLog } from "@/lib/log"
import { useFirestore } from "@/hooks/useFirestore"
import { useTranslation } from "react-i18next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SimpleTemplate } from "@/components/mine/templates/simple"

function Terms() {
  const { t } = useTranslation()

  const { firestoreResult, firestoreLoading, firestoreError } = useFirestore("public", "terms")
  const termsData = firestoreResult?.data()

  if (firestoreLoading) return null

  if (firestoreError) {
    errorLog(firestoreError)
    return <p>{t("main.error")}</p>
  }

  if (!termsData) {
    return <p>{t("main.noData")}</p>
  }

  return (
    <Alert className="flex flex-col gap-2">
      <AlertTitle>
        {t("components.policy.writeDate")} - {termsData.date.toDate().toLocaleDateString() || t("main.noData")}
      </AlertTitle>

      <AlertDescription>{termsData.content || t("main.noData")}</AlertDescription>
    </Alert>
  )
}

export default function App() {
  const { t } = useTranslation()

  return (
    <SimpleTemplate description={t("pages.terms.description")}>
      <Terms />
    </SimpleTemplate>
  )
}
