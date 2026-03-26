import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/router"
import { LogIn, Settings, } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { env } from "@/lib/env"
import { MineIcon } from "@/components/mine/parts/icon"

function Signin() {
  const { t } = useTranslation()
  return (
    <Link to="/signin">
      <Button><LogIn /> {t("title.signin")}</Button>
    </Link>
  )
}

function Signout() {
  const { t } = useTranslation()
  return (
    <Link to="/settings">
      <Button variant="outline"><Settings /> {t("title.settings")}</Button>
    </Link>
  )
}

export function HeaderParts({ sticky }: { sticky?: boolean}) {
  const [user, loading] = useAuthState(auth)

  return (
    <div className={cn(
        "px-4 py-3 m-2 rounded-xl top-0 items-center flex gap-4 w-full",
        sticky ? "sticky" : "fixed",
        user ? "bg-background" : "bg-muted"
      )}>
      <Link to="/" className="flex gap-2 items-center sm:border-r-2 pr-2">
        <MineIcon />
        <p className="font-mono text-primary hidden sm:block">{env.title}</p>
      </Link>

      <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
        {!loading && (
          user ? <Signout /> : <Signin />
        )}
      </div>
    </div>
  )
}