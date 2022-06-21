const element = (
    <a key="key1" style={{ width: 100 }} href="http://google.com">
        click here
    </a>
);
const consoleLogResult = {
    type: 'a', // Dom type
    key: 'key1',
    ref: null,
    props: {
        href: 'http://google.com',
        style: {
            width: 100,
        },
        children: 'click here',
    }
}