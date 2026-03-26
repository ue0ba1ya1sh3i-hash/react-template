import { Button } from "@/components/ui/button"
import { signout, deleteAccount, upgradeWithGoogle } from "@/lib/sign"
import { auth } from "@/lib/firebase"
import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { CopyParts } from "@/components/mine/parts/copy"
import { ParentSettingsParts } from "../parts/settings/parentSettingsParts"
import { ChildSettingsParts } from "../parts/settings/childSettingsParts"
import { useNavigate } from "react-router-dom"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

export function AccountSettings() {
  const { t } = useTranslation()
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  return (
    <ParentSettingsParts>
      <p className="text-xl">{t("pages.settings.account.title")}</p>

      <ChildSettingsParts>
        <p>{t("pages.settings.account.uid")}</p>
        <CopyParts text={user?.uid} />
      </ChildSettingsParts>

      {user?.isAnonymous && (
        <ChildSettingsParts>
          <p>{t("pages.settings.account.connect.title")}</p>
          <Button onClick={async () => {
            await upgradeWithGoogle()
            navigate("/")
          }} variant="outline" className="w-fit">{t("pages.settings.account.connect.button")}</Button>
        </ChildSettingsParts>
      )}

      <ChildSettingsParts>
        <p>{t("pages.settings.account.signout.title")}</p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="lg" variant="destructive" className="w-fit">{t("pages.settings.account.signout.button")}</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t("main.sure")}</AlertDialogTitle>
              <AlertDialogDescription>{t("pages.settings.account.signout.warn")}</AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>{t("main.cancel")}</AlertDialogCancel>
              <AlertDialogAction onClick={async () => {
                await signout()
              }}>{t("main.continue")}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ChildSettingsParts>

      <ChildSettingsParts>
        <p>{t("pages.settings.account.deleteAccount.title")}</p>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="lg" variant="destructive" className="w-fit">{t("pages.settings.account.deleteAccount.button")}</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{t("main.sure")}</AlertDialogTitle>
              <AlertDialogDescription>{t("pages.settings.account.deleteAccount.warn")}</AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>{t("main.cancel")}</AlertDialogCancel>
              <AlertDialogAction onClick={async () => {
                await deleteAccount()
              }}>{t("main.continue")}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ChildSettingsParts>
    </ParentSettingsParts>
  )
}
