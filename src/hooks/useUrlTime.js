import { useEffect, useState } from 'react'

const useUrlTime = () => {
    const [isActive, setIsActive] = useState(true)
    const [totalActiveTime, setTotalActiveTime] = useState(0)

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsActive(document.visibilityState === "visible")
            if (!isActive) {
                setTotalActiveTime(prev => prev + performance.now())
            } else {
                setTotalActiveTime(0)
            }
        }
        document.addEventListener("visibilitychange", handleVisibilityChange)
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
    }, [])
    return { isActive, totalActiveTime}
}

export default useUrlTime