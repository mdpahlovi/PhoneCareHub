import type { LinkProps } from "next/link";
import type { ButtonProps } from "@mui/material";
import type { EmotionCache, Options as OptionsOfCreateCache } from "@emotion/cache";

export type NextEmotionCacheProviderProps = {
    options: Omit<OptionsOfCreateCache, "insertionPoint">;
    CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => React.JSX.Element | null;
} & React.PropsWithChildren;

export interface StyledLinkProps extends LinkProps {
    selected?: boolean;
    children?: React.ReactNode;
}

export interface StyledLinkButtonProps extends ButtonProps {
    href?: string;
    navbar?: boolean;
    children?: React.ReactNode;
}
