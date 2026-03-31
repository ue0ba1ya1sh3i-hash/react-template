import { SimpleTemplate } from "@/components/mine/templates/simple"
import { useParams } from "react-router-dom"
import { useFirestore } from "@/hooks/firestore"

export default function App() {
  const { id } = useParams()
  const { value, loading, error } = useFirestore("notice", id || "")

  if (loading) return

  if (error) {
    console.log(error)

    return (
      <SimpleTemplate title="ERROR">
        <p>An error occurred while fetching the notice.</p>
      </SimpleTemplate>
    )
  }

  const data = value?.data()

  if (!id || !data) return (
    <SimpleTemplate title="Notice Not Found" />
  )

  return (
    <SimpleTemplate title={`${data.title} - ${data.createdAt.toDate().toLocaleDateString()}`}>
      <p className="text-lg">{data.description}</p>
    </SimpleTemplate>
  )
}
