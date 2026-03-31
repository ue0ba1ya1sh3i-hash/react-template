// This setup hooks manages notice permissions.

import { useEffect } from "react"
import { toast } from "sonner"
import { useNoticeStore } from "@/store/notice"

// Hooks
import { useLoading } from "@/hooks/loading"
import { useTranslation } from "react-i18next"

export function useNoticeSetup() {
	const { noticeAllow: enable, setNoticeAllow: setEnable } = useNoticeStore()
	const { loading } = useLoading()
	const { t } = useTranslation()

	useEffect(() => {
		if (!loading && enable) {
			(async () => {
				// Check notice permission
				const permission = await Notification.requestPermission()
				if (permission === "denied") {
					toast.error(t("toast.notice.denied.title"), {
						description: t("toast.notice.denied.description"),
						action: {
							label: t("toast.notice.denied.off"),
							onClick: () => { setEnable(false) }
						}
					})
				}
			})()
		}
	}, [enable, loading])
}
