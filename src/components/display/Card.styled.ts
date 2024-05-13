import styled from "styled-components";

export const SectionWrapper = styled.div`
    background: #ffffff;
    padding: 20px;
    width: 70%;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #d4d2e3;
    border-radius: 24px;
`;

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Photo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
`;

export const MemberInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const MiddleSection = styled.div`
    width: 100%;
    padding: 10px 0;
`;

export const Description = styled.div`
    margin-top: 6px;
    list-style: none;
    padding-left: 0;

    li {
        position: relative;
        margin-bottom: 3px;
        padding-left: 20px;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            background-color: #adabc3;
            border-radius: 50%;
        }
    }
`;

export const BottomSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
`;

export const Contact = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

export const IconLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 10px;
    background-color: #f2f2f2;
    border-radius: 20px;
    color: #5d5a88;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family: "MesloLGS NF", monospace;
`;

export const SocialIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;
