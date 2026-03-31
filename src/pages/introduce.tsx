// This file is introduce page.

import { Info } from "lucide-react"
import { Link } from "@/router"
import { env } from "@/lib/env"
import { TypeAnimation } from "react-type-animation"
import { useTranslation } from "react-i18next"

// Components
import { Button } from "@/components/ui/button"
import { FaHammer, FaRocket, FaStar } from "react-icons/fa"
import { HeaderBlocks } from "@/components/mine/blocks/header"
import { FooterBlocks } from "@/components/mine/blocks/footer"
import { FadeinAnimation } from "@/components/mine/animations/fadein"
import { SeeFadeinAnimation } from "@/components/mine/animations/seeFadein"

function Parent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8 justify-center min-h-svh items-center">
      {children}
    </div>
  )
}

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <HeaderBlocks fixed />
      <FadeinAnimation className="flex flex-col gap-8 justify-center min-h-svh items-center">
        <TypeAnimation
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono text-center"
          sequence={[t("pages.introduce.title"), 4000, env.title, 4000]}
          speed={50}
          repeat={Infinity}
          wrapper="p"
          cursor={true}
        />

        <div className="flex gap-2 items-center">
          <Link to="/o/signin">
            <Button variant="outline">{t("pages.introduce.main.getStarted")}</Button>
          </Link>

          <Link to="/notice">
            <Button><Info /> {t("pages.introduce.main.viewUpdates")}</Button>
          </Link>
        </div>
      </FadeinAnimation>

      <Parent>
        <SeeFadeinAnimation className="text-2xl sm:text-3xl md:text-4xl font-mono text-center">Features</SeeFadeinAnimation>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <SeeFadeinAnimation className="w-85 bg-muted/30 p-5 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-700 w-fit rounded-sm">
                <FaHammer className="size-6" />
              </div>

              <p className="text-lg">High level of customization</p>
            </div>

            <p className="px-2">Since it's not a framework, you can customize it as you see fit.</p>
          </SeeFadeinAnimation>

          <SeeFadeinAnimation className="w-85 bg-muted/30 p-5 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-700 w-fit rounded-sm">
                <FaStar className="size-6" />
              </div>

              <p className="text-lg">Modern design system</p>
            </div>

            <p className="px-2">Since it's not a framework, you can customize it as you see fit.</p>
          </SeeFadeinAnimation>

          <SeeFadeinAnimation className="w-85 bg-muted/30 p-5 rounded-xl flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-700 w-fit rounded-sm">
                <FaRocket className="size-6" />
              </div>

              <p className="text-lg">Latest technology</p>
            </div>

            <p className="px-2">Since it's not a framework, you can customize it as you see fit.</p>
          </SeeFadeinAnimation>
        </div>
      </Parent>

      <FooterBlocks />
    </>
  )
}
