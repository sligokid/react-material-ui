import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "../Components/Exercises";
import { exercises, muscles } from "../store.js";

export default class extends Component {
  state = {
    exercises
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

  render() {
    //console.log(muscles)
    //console.log(this.getExercisesByMuscles())
    const exercises = this.getExercisesByMuscles();

    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
