import type { LinkProps } from "next/link";
import type { ButtonProps } from "@mui/material";
import type { HTMLInputTypeAttribute } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { EmotionCache, Options } from "@emotion/cache";

export type NextEmotionCacheProviderProps = {
    options: Omit<Options, "insertionPoint">;
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

export type FormProps = {
    children?: React.ReactNode;
    submitHandler: SubmitHandler<any>;
    schema?: any;
};

export interface FromInputProps {
    type?: HTMLInputTypeAttribute;
    name: string;
    label: React.ReactNode;
}
