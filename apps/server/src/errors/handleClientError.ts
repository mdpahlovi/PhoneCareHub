import { Prisma } from "@prisma/client";
import { getPrismaError } from "../helpers/getPrismaError";
import { IGenericErrorMessage, IGenericErrorResponse } from "../interfaces/error";

const handleClientError = (error: Prisma.PrismaClientKnownRequestError): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = [
        {
            path: error.code,
            message: getPrismaError(error.message),
        },
    ];

    return {
        statusCode: 400,
        message: "Client Error",
        errorMessages: errors,
    };
};

export default handleClientError;
