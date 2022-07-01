import PropTypes from 'prop-types';

User.propTypes = {
    male: PropTypes.bool.isRequired,
    // age: PropTypes.number,
    age: function(props, propName, componentName){
        const value = props[propName];
        if(value > 10 || value > 20){
            return new Error(
                `Invalid prop ${propName} supplied to ${componentName}.
                It must be 10 <= value <= 20`,
            )
        }
    },
    type: PropTypes.oneOf(['gold', 'silver', 'bronze']),
    onChangeName: PropTypes.func, // (name: string) => void
    onChangeTitle: PropTypes.func.isRequired
};

export default function User({ type, age, male, onChangeName, onChangeTitle }){
    const onClick1 = () => {
        const msg = `type: ${type}, age: ${age ? age : 'non'}`;
        console.log(msg, { color: type === 'gold' ? 'red' : 'black' });
        //...
    }
    const onClick2 = (name, title) => {
        if(onChangeName){
            onChangeName(name);
        }
        onChangeTitle(title);
        male ? goMalePage() : goFemalePage();
    }
    return null;
};
function goMalePage(){}
function goFemalePage(){}
