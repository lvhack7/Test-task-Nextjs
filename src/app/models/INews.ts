export default interface INews {
    id: string
    webPublicationDate: string
    webTitle: string
    webUrl: string
    fields: {
        thumbnail: string
    }
}