import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "../Components/Exercises";
import { exercises, muscles } from "../store.js";

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
        //console.log(muscles);
      }, {})
    );
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };
  handleCategorySelected = category => {
    this.setState({
      category
    });
  };
  render() {
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />

        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
