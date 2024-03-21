import dayjs from "dayjs";

export default function getDateRange(deliveryDate: string | null) {
    if (deliveryDate) {
        const date = dayjs(deliveryDate);
        return `${date.format("MMMM D, YYYY")} - ${date.add(2, "d").format("MMMM D, YYYY")}`;
    } else {
        return null;
    }
}
