// This component is a button to show auth loading state.

// Components
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

import { toast } from "sonner"

// Hooks
import { useTranslation } from "react-i18next"
import { useSignLoadingStore } from "@/store/signLoading"

type SignLoadingButton = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>,
  groupType: "sign"
}

export function SignLoadingButton({ onClick, children, groupType, ...props }: SignLoadingButton) {
  const { signinLoading, setSigninLoading } = useSignLoadingStore()
  const { t } = useTranslation()

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setSigninLoading(true)
    toast.promise(
      async () => {
        await onClick?.(event)
        setSigninLoading(false)
      },

      {
        loading: "Processing...",
        success: () => t("toast.sign.signin"),
        error: t("common.error.main"),
      }
    )
  }

  return (
    <Button onClick={handleClick} disabled={signinLoading} {...props}>
      {signinLoading ? (
        <>
          <Spinner data-icon="inline-start" />
          Processing...
        </>
      ) : (
        children
      )}
    </Button>
  )
}
