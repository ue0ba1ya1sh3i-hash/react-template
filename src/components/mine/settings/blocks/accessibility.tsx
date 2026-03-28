import { useTranslation } from "react-i18next"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useThemeStore } from "@/hooks/store/theme"
import { ChildSettingsParts } from "@/components/mine/settings/parts/child"
import { ParentSettingsParts } from "@/components/mine/settings/parts/parent"

export function AccessibilitySettings() {
  const { t, i18n } = useTranslation()
  const { setDark, dark } = useThemeStore()

  return (
    <ParentSettingsParts>
        <p className="text-xl">{t("pages.settings.accessibility.title")}</p>

        <ChildSettingsParts isFlex>
          <p>{t("pages.settings.accessibility.language.title")}</p>
          <Select defaultValue={i18n.language} onValueChange={i18n.changeLanguage}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder={t("pages.settings.accessibility.language.select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ChildSettingsParts>

        <ChildSettingsParts isFlex>
          <p>{t("pages.settings.accessibility.darkMode")}</p>
          <Switch checked={dark} onCheckedChange={setDark} />
        </ChildSettingsParts>
      </ParentSettingsParts>
  )
}
