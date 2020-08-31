import moment from "moment";

export class Formatting {
    static toFormattedDateTimeString(dateStr: string): string {
        return moment(dateStr).format("YYYY-MM-DD HH:mm:ss");
    }

    static toFormattedDateTimeStringAsFileName(dateStr?: string): string {
        return moment(dateStr).format("YYYY-MM-DD_HH-mm-ss");
    }

    static toFormattedDateString(dateStr: string): string {
        return moment(dateStr).format("YYYY-MM-DD");
    }
}