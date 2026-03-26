import { useTranslation } from "react-i18next"

// Parts
import { HeaderParts } from "@/components/mine/parts/header"
import { FooterParts } from "@/components/mine/parts/footer"

// 設定コンポーネント
import { AccountSettings } from "@/components/mine/settings/account"
import { AccessibilitySettings } from "@/components/mine/settings/accessibility"

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-svh flex flex-col gap-6">
      <HeaderParts sticky />

      <div className="px-4 flex flex-col gap-6">
        <p className="font-bold text-2xl">{t("pages.settings.title.main")}</p>
        <AccountSettings />
        <AccessibilitySettings />
      </div>

      <FooterParts />
    </div>
  )
}
