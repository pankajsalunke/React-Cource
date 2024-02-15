import  prop  from 'prop-types';

function Student(props) {
    return(
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student:{props.isStudent ? "YES":"NO"}</p>
        </div>
    );
}
Student.prop = {
    name: prop.string,
    age: prop.number,
    isStudent:prop.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student