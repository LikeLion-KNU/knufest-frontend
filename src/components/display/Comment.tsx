import { CommentContent, CommentTitle } from "./Comment.styled";

type CommentProps = {
    name: string;
    time: string;
    content: string;
};
//zustand로 refactor 필요

const Comment = ({ name, time, content }: CommentProps) => {
    return (
        <>
            <CommentTitle>
                <div>{name}</div>
                <div>{time}</div>
            </CommentTitle>
            <CommentContent>{content}</CommentContent>
        </>
    );
};

export default Comment;
