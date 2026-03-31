// This page is main page.

import { SimpleTemplate } from "@/components/mine/templates/simple"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

function ViewProjectButton() {
  const { t } = useTranslation()

  return (
    <Link to="https://github.com/ue0ba1ya1sh3i-hash/react-template" target="_blank">
      <Button className="w-fit">
        <FaGithub />
        {t("pages.index.main.viewProject")}
      </Button>
    </Link>
  )
}

export default function App() {
  const { t } = useTranslation()

  return (
    <SimpleTemplate description={t("pages.index.main.description")} button={<ViewProjectButton />} />
  )
}
