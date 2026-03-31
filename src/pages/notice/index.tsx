// This file is notice page.

import { errorLog } from "@/lib/log"
import { useTranslation } from "react-i18next"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore"
import { db } from "@/lib/firebase"

// Components
import { SimpleTemplate } from "@/components/mine/templates/simple"
import { Link } from "react-router-dom"
import { ParentParts } from "@/components/mine/parts/parent"

function Updates() {
  const { t } = useTranslation()
  const [value, loading, error] = useCollection(collection(db, "notice"))

  if (loading) return null

  if (error) {
    errorLog(error)
    return <p>{t("common.error.main")}</p>
  }

  if (!value?.docs.length) {
    return <p>{t("common.error.noData")}</p>
  }

  return (
    <div className="flex flex-col gap-2">
      {value.docs.map((item) => {
        const data = item.data()
        const id = item.id

        return (
          <ParentParts key={id} className="p-3">
            <Link to={`/notice/${id}`}>
              {data.title} - {data.createdAt?.toDate().toLocaleDateString()}
            </Link>
          </ParentParts>
        )
      })}
    </div>
  )
}

export default function App() {
  return (
    <SimpleTemplate>
      <Updates />
    </SimpleTemplate>
  )
}
