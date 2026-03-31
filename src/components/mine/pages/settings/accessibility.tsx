// This file is accessibility settings block.

import { useTranslation } from "react-i18next"

// Store
import { useNoticeStore } from "@/store/notice"
import { useThemeStore } from "@/store/theme"

// Components
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChildParts } from "@/components/mine/parts/child"
import { ParentParts } from "@/components/mine/parts/parent"

export function AccessibilitySettingsBlock() {
  const { t, i18n } = useTranslation()
  const { setDark, dark } = useThemeStore()
  const { noticeAllow, setNoticeAllow } = useNoticeStore()

  return (
    <ParentParts>
        <p className="text-xl">{t("pages.settings.main.block.accessibility.title")}</p>

        <ChildParts flex>
          <p>{t("pages.settings.main.block.accessibility.language.title")}</p>
          
          <Select defaultValue={i18n.language} onValueChange={i18n.changeLanguage}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder={t("pages.settings.main.block.accessibility.language.select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </ChildParts>

        <ChildParts flex>
          <p>{t("pages.settings.main.block.accessibility.dark")}</p>
          <Switch checked={dark} onCheckedChange={setDark} />
        </ChildParts>

        <ChildParts flex>
          <p>{t("pages.settings.main.block.accessibility.notice")}</p>
          <Switch checked={noticeAllow} onCheckedChange={setNoticeAllow} />
        </ChildParts>
      </ParentParts>
  )
}
