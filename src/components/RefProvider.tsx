import { useScrollIntoView } from "@mantine/hooks";
import { FC, createContext, PropsWithChildren, useContext } from "react";

interface ScrollIntoViewAnimation {
    alignment?: 'start' | 'end' | 'center';
}

interface Refs {
    home: {
        scrollIntoView: ({ alignment }?: ScrollIntoViewAnimation) => void;
        targetRef: React.RefObject<HTMLDivElement>;
    };
    about: {
        scrollIntoView: ({ alignment }?: ScrollIntoViewAnimation) => void;
        targetRef: React.RefObject<HTMLDivElement>;
    };
    contact: {
        scrollIntoView: (alignment?: ScrollIntoViewAnimation) => void;
        targetRef: React.RefObject<HTMLDivElement>;
    };
}

const RefContext = createContext<Refs | null>(null);


const RefProvider: FC<PropsWithChildren> = ({ children }) => {
    const { scrollIntoView: homeScrollIntoView, targetRef: homeRef } = useScrollIntoView<HTMLDivElement>({ offset: 100, duration: 500 });
    const { scrollIntoView: aboutScrollIntoView, targetRef: aboutRef } = useScrollIntoView<HTMLDivElement>({ offset: 100, duration: 500 });
    const { scrollIntoView: contactScrollIntoView, targetRef: contactRef } = useScrollIntoView<HTMLDivElement>({ offset: 60, duration: 500 });
    
    const refs: Refs = {
        home: {
            scrollIntoView: homeScrollIntoView,
            targetRef: homeRef
        },
        about: {
            scrollIntoView: aboutScrollIntoView,
            targetRef: aboutRef,
        },
        contact: {
            scrollIntoView: contactScrollIntoView,
            targetRef: contactRef
        }
    }
    
    return (
        <RefContext.Provider value={refs}>
            {children}
        </RefContext.Provider>
    );
}

export const useRefContext = () => useContext(RefContext);

export default RefProvider;