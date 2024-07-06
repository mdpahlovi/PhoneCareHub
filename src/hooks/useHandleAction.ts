import toast from "react-hot-toast";
import { ActionProps } from "@/types";
import { useTransition } from "react";
import { FormikHelpers } from "formik";
import { useRouter } from "next/navigation";

export default function useHandleAction({ action, reset = true }: ActionProps) {
    const { push } = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (values: any, helpers: FormikHelpers<any>) => {
        startTransition(async () => {
            await action(values).then(({ success, message, redirect }) => {
                if (success) {
                    reset ? helpers.resetForm() : null;
                    toast.success(message);
                    redirect ? push(redirect) : null;
                } else {
                    toast.error(message);
                }
            });
        });
    };

    return { handleSubmit, isPending };
}
