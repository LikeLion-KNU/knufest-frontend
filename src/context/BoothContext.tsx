import { createContext, useState } from "react";

export const BoothContext = createContext<{
    visibleBooth: string[] | null;
    setVisibleBooth: React.Dispatch<React.SetStateAction<string[] | null>>;
}>({
    visibleBooth: [],
    setVisibleBooth: () => undefined,
});

export const BoothContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [visibleBooth, setVisibleBooth] = useState<string[] | null>([]);

    return (
        <BoothContext.Provider
            value={{
                visibleBooth,
                setVisibleBooth,
            }}
        >
            {children}
        </BoothContext.Provider>
    );
};
