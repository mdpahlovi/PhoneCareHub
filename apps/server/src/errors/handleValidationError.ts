import { Prisma } from "@prisma/client";
import { getPrismaError } from "../helpers/getPrismaError";
import { IGenericErrorMessage, IGenericErrorResponse } from "../interfaces/error";

const handleValidationError = (error: Prisma.PrismaClientValidationError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = [
        {
            path: "",
            message: getPrismaError(error.message),
        },
    ];

    return {
        statusCode: 400,
        message: "Validation Error",
        errorMessages: errors,
    };
};

export default handleValidationError;
