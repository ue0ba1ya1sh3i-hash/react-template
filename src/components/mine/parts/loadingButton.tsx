import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { useLoadingStore } from "@/hooks/store/loading"

type LoadingButtonProps = React.ComponentProps<typeof Button> & {
  onClick: () => Promise<void> | void,
  groupType: "sign"
}

export function LoadingButtonParts({ onClick, children, groupType, ...props }: LoadingButtonProps) {
  const {
    isSignLoading,
    setIsSignLoading
  } = useLoadingStore()

  const handleClick = async () => {
    setIsSignLoading(true)
    try {
      await onClick()
    } finally {
      setIsSignLoading(false)
    }
  }

  return (
    <Button onClick={handleClick} disabled={isSignLoading} {...props}>
      {isSignLoading ? (
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
