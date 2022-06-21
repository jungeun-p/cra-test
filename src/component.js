function Title({ title, color }){
    return <p style={{ color }}>{title}</p>
}
const element = <Title title="hi" color="blue" />;
console.log(element);

const consoleLogResult = {
    type: Title, // component 함수
    props: { title: 'hi', color: 'blue '},
}