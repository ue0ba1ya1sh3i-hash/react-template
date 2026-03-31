import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useSignStore } from "@/store/sign"

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  onClick: () => Promise<void> | void,
  groupType: "sign"
}

export function SignLoadingButton({ onClick, children, groupType, ...props }: LoadingButtonProps) {
  const { signinLoading: signLoading, setSigninLoading: setSignLoading } = useSignStore()

  const handleClick = async () => {
    setSignLoading(true)
    try {
      await onClick()
    } finally {
      setSignLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={signLoading} {...props}>
      {signLoading ? (
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
