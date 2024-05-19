export interface IComment {
    name: string;
    comment: string;
    created: string;
    deleteable: boolean;

    handleCommentDelete?: () => undefined;
}
