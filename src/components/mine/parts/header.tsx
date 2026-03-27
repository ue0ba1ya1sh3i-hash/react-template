import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/router"
import { LogIn, Settings } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"
import { env } from "@/lib/env"
import { MineIcon } from "@/components/mine/parts/icon"

function Signin({ sticky }: { sticky?: boolean }) {
  const { t } = useTranslation()

  return (
    <div className={cn(
      "px-4 py-3 top-0 items-center flex gap-4 w-full bg-background",
      sticky ? "sticky" : "fixed"
    )}>
      <Link to="/" className="flex gap-2 items-center sm:border-r-2 pr-2">
        <MineIcon />
        <p className="font-mono text-primary hidden sm:block">{env.title}</p>
      </Link>

      <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
        <Link to="/settings">
          <Button><Settings /> {t("title.settings")}</Button>
        </Link>
      </div>
    </div>
  )
}

function Signout({ sticky }: { sticky?: boolean }) {
  const { t } = useTranslation()
  return (
    <div className={cn(
      "top-0 w-full",
      sticky ? "sticky" : "fixed"
    )}>
      <div className="m-4 w-auto px-4 py-4 items-center flex gap-4 bg-muted rounded-xl backdrop-blur-md border-border border-2">
        <Link to="/" className="flex gap-2 items-center sm:border-r-2 pr-2">
          <MineIcon />
          <p className="font-mono text-primary hidden sm:block">{env.title}</p>
        </Link>

        <div className="ml-auto sm:border-l-2 pl-2 flex gap-2 items-center">
          <Link to="/signin">
            <Button><LogIn /> {t("title.signin")}</Button>
          </Link>

          <Link to="/settings" className="hidden sm:block">
            <Button><Settings /> {t("title.settings")}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export function HeaderParts({ sticky }: { sticky?: boolean}) {
  const [user, loading] = useAuthState(auth)

  if (!loading) {
    if (user) {
      return <Signin sticky={sticky} />
    } else {
      return <Signout sticky={sticky} />
    }
  }
}