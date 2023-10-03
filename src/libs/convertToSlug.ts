const convertToSlug = (payload: string): string => {
    const lowercaseString = payload.toLowerCase();
    return lowercaseString.replace(/\s+/g, "-");
};

export default convertToSlug;
