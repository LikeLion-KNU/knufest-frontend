export interface IBoothItem {
    id: number;
    boothName: string;
    likes: number;
    categori: string;
    boothnum: number;
    likable: boolean;
}

export interface IReadAllBoothResponse {
    count: number;
    boothDtoes: IBoothItem[];
}

export interface IReadBoothByIdResponse {
    id: number;
    page: number;
    boothName: string;
    likes: number;
    categori: string;
    boothnum: number;
    urls: string[];
    comments: [
        {
            id: number;
            name: string;
            comment: string;
            created: string;
            deleteable: boolean;
        },
    ];
    likable: boolean;
}

export interface ICommentRead {
    time: string;
    name: string;
    comment: string;
    content: string;
}
