import { ReactNode, createContext, useState,  } from "react"
import { IRouterContext } from "../interfaces"

export const RouterContext = createContext<IRouterContext | null>( null )

export const RouteDataProvider = ({ children} : { children: ReactNode }) => {
    const [isReload, setIsReload] = useState(false)
    const [winner, setWinner] = useState(false);

    return (
        <RouterContext.Provider value={{
            isReload,
            winner,
            setWinner,
            setIsReload
        }}>
            {children}
        </RouterContext.Provider>
    )

}
