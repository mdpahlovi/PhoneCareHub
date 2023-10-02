"use client";

import createCache from "@emotion/cache";
import { useState, Fragment } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider as DefaultCacheProvider } from "@emotion/react";
import type { NextEmotionCacheProviderProps } from "@/types/global";

export default function NextEmotionCacheProvider(props: NextEmotionCacheProviderProps) {
    const { options, CacheProvider = DefaultCacheProvider, children } = props;

    const [registry] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted: { name: string; isGlobal: boolean }[] = [];
        cache.insert = (...args) => {
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({ name: serialized.name, isGlobal: !selector });
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const inserted = registry.flush();
        if (inserted.length === 0) return null;

        let styles = "";
        let dataEmotionAttribute = registry.cache.key;
        const globals: { name: string; style: string }[] = [];

        inserted.forEach(({ name, isGlobal }) => {
            const style = registry.cache.inserted[name];

            if (typeof style !== "boolean") {
                if (isGlobal) {
                    globals.push({ name, style });
                } else {
                    styles += style;
                    dataEmotionAttribute += name;
                }
            }
        });

        return (
            <Fragment>
                {globals.map(({ name, style }) => (
                    <style key={name} data-emotion={`${registry.cache.key}-global ${name}`} dangerouslySetInnerHTML={{ __html: style }} />
                ))}
                {styles && <style data-emotion={dataEmotionAttribute} dangerouslySetInnerHTML={{ __html: styles }} />}
            </Fragment>
        );
    });

    return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}
