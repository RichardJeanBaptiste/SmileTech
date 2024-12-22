import { createContext, Dispatch, ReactNode, SetStateAction, useContext , useState} from "react";

export interface DateContextInterface {
    date: String,
    setDate: Dispatch<SetStateAction<string>>
}

const defaultState = {
    date: new Date().toString(),
    setDate: (date:String) => {},
} as DateContextInterface;

export const DateContext = createContext<DateContextInterface>(defaultState);

type DateProviderProps = {
    children: ReactNode
}

export const DateProvider = ({children}: DateProviderProps) => {

    const [date, setDate] = useState(new Date().toString());
    return (
        <DateContext.Provider value={{date, setDate}}>
            {children}
        </DateContext.Provider>
    )
}