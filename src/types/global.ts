import type { EmotionCache, Options as OptionsOfCreateCache } from "@emotion/cache";

export type NextEmotionCacheProviderProps = {
    options: Omit<OptionsOfCreateCache, "insertionPoint">;
    CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => React.JSX.Element | null;
} & React.PropsWithChildren;
