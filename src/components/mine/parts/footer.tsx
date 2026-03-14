import { Link } from "@/router"
import { useTranslation } from "react-i18next"
import { env } from "@/lib"
import { MineIcon } from "@/components/mine/parts"

export function FooterParts() {
  const { t } = useTranslation()

  return (
    <footer className="p-5 w-full border-t-2 flex flex-col gap-3">
      <Link to="/" className="w-fit flex gap-2 items-center">
        <MineIcon className="fill-foreground size-4" />
        <p className="font-mono text-foreground">{env.title}</p>
      </Link>

      <div className="flex gap-3 flex-col sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {env.title}. All rights reserved.</p>
        <div className="flex gap-3 sm:ml-auto">
          <Link to="/privacy">{t("title.privacy")}</Link>
          <Link to="/terms">{t("title.terms")}</Link>
        </div>
      </div>
    </footer>
  )
}
