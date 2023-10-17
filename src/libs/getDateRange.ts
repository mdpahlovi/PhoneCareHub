import { addDays, format, parseISO } from "date-fns";

export default function getDateRange(deliveryDate: string | null) {
    if (deliveryDate) {
        const date = parseISO(deliveryDate);
        const addTwoDate = addDays(date, 2);
        return `${format(date, "PP")} - ${format(addTwoDate, "PP")}`;
    } else {
        return null;
    }
}
