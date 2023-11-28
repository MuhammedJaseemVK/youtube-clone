import he from "he";

export const decodeString=(str)=>{
    return he.decode(str);
}