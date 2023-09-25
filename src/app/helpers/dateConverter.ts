export const dateConverter = (dateString: string) => {
    const date = new Date(dateString)
    // const options = {
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //     timeZoneName: "short",
    // }

    const formattedDate = date.toLocaleString('kk-KZ', { timeZone: 'UTC' });

    return formattedDate
}