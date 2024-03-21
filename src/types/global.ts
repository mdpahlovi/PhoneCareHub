import type { FormikHelpers } from "formik";
import type { HTMLInputTypeAttribute } from "react";
import type { EmotionCache, Options } from "@emotion/cache";
import { OfflineAppointment, OnlineAppointment } from "./response";

export type NextEmotionCacheProviderProps = {
    options: Omit<Options, "insertionPoint">;
    CacheProvider?: (props: { value: EmotionCache; children: React.ReactNode }) => React.JSX.Element | null;
} & React.PropsWithChildren;

export type FormProps = {
    initialValues: any;
    validationSchema?: any;
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
} & React.PropsWithChildren;

export interface FromInputProps {
    type?: HTMLInputTypeAttribute;
    name: string;
    label: React.ReactNode;
    textarea?: boolean;
    disabled?: boolean;
}

export interface FromRatting {
    name: string;
    label: React.ReactNode;
    disabled?: boolean;
}

export interface FromSelectProps {
    items: string[];
    name: string;
    label: React.ReactNode;
    disabled?: boolean;
}

export interface FromDatePickProps {
    name: string;
    label: React.ReactNode;
    disabled?: boolean;
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

export type TablePaginationProps = { total: number; page: number; size: number };
export type TableSearchProps = { search: string; label: string };

export type TableProps = {
    columns: string[];
    pagination?: TablePaginationProps;
    search?: TableSearchProps;
} & React.PropsWithChildren;

export type OfflineAppointmentTableProps = { appointment: OfflineAppointment[]; pagination: TablePaginationProps };

export type OnlineAppointmentTableProps = { appointment: OnlineAppointment[]; pagination: TablePaginationProps };
