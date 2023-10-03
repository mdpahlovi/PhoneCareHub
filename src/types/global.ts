import type { LinkProps } from "next/link";
import type { EmotionCache, Options as OptionsOfCreateCache } from "@emotion/cache";

export type NextEmotionCacheProviderProps = {
    options: Omit<OptionsOfCreateCache, "insertionPoint">;
    CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => React.JSX.Element | null;
} & React.PropsWithChildren;

export interface NavLink extends LinkProps {
    selected: boolean;
    children: React.ReactNode;
}

export interface NavLinkButton {
    href?: string;
    children?: React.ReactNode;
}
