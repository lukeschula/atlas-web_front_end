class studentHogwarts {
   #privateScore = 0;
   #name = null;

   #changeScoreBy(points) {
    this.#privateScore += points;
   }

   setName(newName) {
    this.#name = newName;
   }

   rewardStudent() {
    this.#changeScoreBy(1);
   }

   penalizeStudent() {
    this.#changeScoreBy(-1);
   }

   getScore () {
    const studName = this.#name;
    const studScore = this.#privateScore;

    return {[studName]: studScore};
   }

}

const harry = new studentHogwarts()
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts()
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());