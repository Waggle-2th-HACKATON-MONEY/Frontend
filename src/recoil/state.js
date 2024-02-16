import { atom } from 'recoil';
//recoil state 생성
export const scoreState = atom({
    key: 'score',
    default:[],
});