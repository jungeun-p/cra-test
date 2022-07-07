function* minsu(){
    const myMsgList = [
        'm1',
        'm2',
        'm3',
        'm4',
        'm5'
    ];
    for(const msg of myMsgList){
        // yield가 반환하는 값은 next 매개변수로 입력한 값 
        console.log('수지:', yield msg);
        // '수지': s1
    }
};
// yield ''
// yield 's1'
// yield 's2'
// yield 's3

// 일반함수
function suji(){
    const myMsgList = ['', 's1', 's2', 's3'];
    const gen = minsu();
    // gen의 next메서드를 호출
    for (const msg of myMsgList){
        // generator의 반환값 출력 
        console.log('m:', gen.next(msg).value); 
        // m: gen.next('').value = minsu 제너레이터 함수 실행 
        // m: gen.next('s1').value = m1
    }
}

suji();

// function* rabbit(){
//     yield '🐰0';
//     yield '🐰1';
//     yield '🐰2';
//     yield '🐰3';
//     yield '🐰4';
// }

function* rabbit(){
    const rabbitList = ['🐰0', '🐰1', '🐰2', '🐰3', '🐰4'];
    for(const rab of rabbitList){
        // yield rab
        console.log('ham:', yield rab);
        // 2. 제너레이터 실행 / 반환값 X
        // 3. 첫번째 yield 반환값 / next 매개변수 🐹1
        // 4. 다음 값으로 yield 
    }
}
function hamster(){
    const hamList = ['🐹0', '🐹1', '🐹2', '🐹3', '🐹4'];
    const gen = rabbit();
    for(const ham of hamList){
        console.log('rab:', gen.next(ham).value);
        // 1. gen.next(ham) : '🐰0'

    }
}