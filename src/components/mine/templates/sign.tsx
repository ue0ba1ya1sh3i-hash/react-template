// Shadcn UI
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { env } from "@/lib/env"
import { Link, useNavigate } from "@/router"
import { MineIcon } from "@/components/mine/parts/icon"
import { LoadingButtonParts } from "../parts/loadingButton"
import { FaGoogle } from "react-icons/fa"
import { CircleUser } from "lucide-react"
import { signinWithGoogle, signinWithGuest } from "@/lib/sign"
import { useTranslation } from "react-i18next"
import { FadeinAnimation } from "@/components/mine/animation/fadein"

export function LoginTemplate({ type }: { type: "signin" | "signup" }) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const reverseType = type === "signin" ? "signup" : "signin"

  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-4 overflow-hidden">
      <FadeinAnimation className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <form>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center px-6">
                <Link to="/introduce">
                  <MineIcon className="size-8" />
                </Link>

                <p className="text-xl font-bold">{t(`pages.${type}.title`, { title: env.title })}</p>

                <FieldDescription>
                  {t(`pages.${type}.announce`)} <Link to={`/${reverseType}`}>{t(`title.${reverseType}`)}</Link>
                </FieldDescription>
              </div>

              <Field>
                <FieldLabel htmlFor="email">{t("components.sign.email")}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">{t("components.sign.pass")}</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </Field>

              <Field>
                <LoadingButtonParts groupType="sign" type="submit" onClick={() => {
                  window.alert("clicked")
                }}>{t(`pages.${type}.submit`)}</LoadingButtonParts>
              </Field>

              <FieldSeparator>{t("components.sign.or")}</FieldSeparator>

              <Field className="grid gap-2 sm:grid-cols-2">
                <LoadingButtonParts
                  variant="outline"
                  groupType="sign"
                  onClick={async () => {
                    await signinWithGuest()
                    navigate("/")
                  }}
                >
                  <CircleUser />
                  {t(`pages.${type}.continue.guest`)}
                </LoadingButtonParts>

                <LoadingButtonParts
                  variant="outline"
                  groupType="sign"
                  onClick={async () => {
                  await signinWithGoogle()
                  navigate("/")
                }}>
                  <FaGoogle />
                  {t(`pages.${type}.continue.google`)}
                </LoadingButtonParts>
              </Field>
            </FieldGroup>
          </form>

          <FieldDescription className="px-6 text-center">
            {t(`pages.${type}.warn`)} <Link to="/terms">{t("title.terms")}</Link> & <Link to="/privacy">{t("title.privacy")}</Link>
          </FieldDescription>
        </div>
      </FadeinAnimation>
    </div>
  )
}
