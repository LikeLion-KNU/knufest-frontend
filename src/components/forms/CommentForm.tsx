import { InputContent, InputId, InputPassword, SubBtn } from "./CommentForm.styled";

const CommentForm = () => {
    return (
        <>
            <div>
                <div>아이디</div>
                <InputId type="text"></InputId>
            </div>
            <div>
                <div>비밀번호</div>
                <InputPassword type="password"></InputPassword>
            </div>
            <div>
                <div>내용</div>
                <InputContent type="text"></InputContent>
            </div>

            <SubBtn type="submit">submit</SubBtn>
        </>
    );
};

export default CommentForm;
