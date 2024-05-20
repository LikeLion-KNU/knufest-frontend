export const parseCreatedDate = (str: string) => {
    // 2024-05-19T03:18:40.33581
    console.log(str);
    if(!str) return '';
    
    const [date, time] = (str||'').split("T");
    const [y, m, d] = date.split("-");
    const t = time.split(".")[0];

    return `${y}년 ${m}월 ${d}일 ${t}`
};
