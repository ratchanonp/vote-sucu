import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

interface Props {
    children: JSX.Element
}

function ProtectedRoute(props: Props) {

    const { children } = props
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

    if (!isAuthenticated) return (
        <Navigate to="/" />
    )

    return children
}

export default ProtectedRoute