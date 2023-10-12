import type { LinkProps } from "next/link";
import type { FormikHelpers } from "formik";
import type { ButtonProps } from "@mui/material";
import type { HTMLInputTypeAttribute } from "react";
import type { EmotionCache, Options } from "@emotion/cache";
import { type } from "os";

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
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
} & React.PropsWithChildren;

export interface FromInputProps {
    type?: HTMLInputTypeAttribute;
    name: string;
    label: React.ReactNode;
}

export interface LoginFormInput {
    email: string;
    password: string;
}

export interface RegisterFormInput {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    c_password: string;
}

export interface Meta {
    page: number;
    size: number;
    total: number;
}

export type GenericResponse = {
    data: any;
    meta?: Meta;
};

export type GenericErrorMessage = {
    path: string | number;
    message: string;
};

export type GenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: GenericErrorMessage[];
};
