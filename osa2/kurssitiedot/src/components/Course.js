import React from 'react'

const Course = (props) => {

    const Header = ({ header }) => {
        return (
            <div>
                <h1>
                    {header}
                </h1>
            </div>
        )
    }

    const Content = ({ parts }) => {

        return parts.map((part) =>
            <Part key={part.id} name={part.name} count={part.exercises} />);
    };



    const Part = (props) => {

        return (
            <div>
                <p>{props.name} {props.count}</p>
            </div>
        )
    }


    const Total = ({ parts }) => {

        const totalCount = parts.reduce(
            (previousSum, part) => previousSum + part.exercises, 0);

        return (
            <div>
                <b><p>Number of exercises {totalCount}</p></b>
            </div>
        )
    }


    return (
        <div>
            <Header header={props.course.name}></Header>
            <Content parts={props.course.parts}></Content>
            <Total parts={props.course.parts}></Total>
        </div>
    )
}


export default Course