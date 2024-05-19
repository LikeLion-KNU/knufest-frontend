export interface IComment {
    id?: number;
    name: string;
    comment: string;
    created: string;
    deleteable: boolean;

    handleCommentDelete?: () => undefined;
}
