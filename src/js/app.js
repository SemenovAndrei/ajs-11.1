/* eslint-disable no-restricted-syntax */
import charactersList from './characters/characterslist';
import Team from './team';

const team = new Team();
team.addAll(charactersList);


for (const person of team) {
  console.log(person);
}
const expected = [];
for (const person of team) {
  expected.push(person);
}
console.log(expected);

const members = team.toArray();
members.forEach((e) => {
  console.log(e);
});
