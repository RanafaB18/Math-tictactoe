import { useContext } from "react"
import { DataContext } from "../context/DataContext"

const useDataContext = () => {
    const data = useContext(DataContext)
    return data
}

export default useDataContext
