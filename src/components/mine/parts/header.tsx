import { Button } from "@/components/ui/button"
import { Link } from "@/router"
import { LogIn, Settings, } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, env } from "@/lib"
import { MineIcon } from "@/components/mine/parts"

export function HeaderParts({ sticky }: { sticky?: boolean}) {
  const { t } = useTranslation()
  const [user, loading] = useAuthState(auth)

  return (
    <div className={`px-4 bg-background py-3 top-0 items-center flex gap-4 w-full ${sticky ? "sticky" : "fixed"}`}>
      <Link to="/" className="flex gap-2 items-center sm:border-r-2 pr-2">
        <MineIcon />
        <p className="font-mono text-primary hidden sm:block">{env.title}</p>
      </Link>

      <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
        {!loading && !user && (
          <Link to="/signin">
            <Button><LogIn /> {t("title.signin")}</Button>
          </Link>
        ) || (
          <>
            <Link to="/settings">
              <Button variant="outline"><Settings /> {t("title.settings")}</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}