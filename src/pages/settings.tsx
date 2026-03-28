import { useTranslation } from "react-i18next"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "@/lib/firebase"

// Parts
import { HeaderBlocks } from "@/components/mine/blocks/header"
import { FooterBlocks } from "@/components/mine/blocks/footer"

// 設定コンポーネント
import { AccountSettings } from "@/components/mine/settings/blocks/account"
import { AccessibilitySettings } from "@/components/mine/settings/blocks/accessibility"

export default function App() {
  const { t } = useTranslation()
  const [user] = useAuthState(auth)

  return (
    <div className="min-h-svh flex flex-col gap-6">
      <HeaderBlocks />

      <div className="px-4 flex flex-col gap-6">
        <p className="font-bold text-2xl">{t("pages.settings.title.main")}</p>
        {user && <AccountSettings />}
        <AccessibilitySettings />
      </div>

      <FooterBlocks />
    </div>
  )
}
