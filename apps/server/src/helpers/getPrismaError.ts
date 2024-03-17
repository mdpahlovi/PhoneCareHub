export function getPrismaError(message: string): string {
    const errorArray = message.split(". ");

    return errorArray[errorArray.length - 1];
}
