const FRIENDS = [
    { name: 'jin', age: 15 },
    { name: 'rm' , age: 20 },
    { name: 'hope', age: 25 },
    { name: 'suga', age: 30 }
];

let nextId = 0;
export function getNextFriend(){
    return { ...FRIENDS[nextId % 4], id: nextId++ };
}