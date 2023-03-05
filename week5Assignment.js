
class Person {
    constructor(name, day) {
    this.name = name;
    this.day = day;
    }
    
    describe() {
    
    return `${this.name} cleans on ${this.day}`;
    }
    }
    class Chore {
    constructor(name) {
    this.name = name;
    this.persons = [];
    }
    
    addPerson(person) {
    if (person instanceof Person) {
    this.persons.push(person);
    } else {
    throw new Error(`You can only add an instance of Person. 
    argument is not a person: ${person}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.persons.length} persons.`;
    }
    }
    class Menu { 
    constructor() {
    this.chores = [];
    this.selectedChore = null; 
    }
    
    start() { 
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
    switch(selection) {
    case '1' :
    this.createChore();
    break;
    case '2' :
    this.viewChore();
    break;
    case '3' :
    this.deleteChore();
    break;
    case '4' :
    this.displayChores();
    break;
    default:
    selection = 0;
    }
    selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }
    
    
    showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create a new chore
    2) view a chore
    3) delete a chore
    4) display all chores
    `);
    }
    
    showChoreMenuOptions(choreInfo) {
    return prompt(`
    0) back
    1) add a new person
    2) delete a person
    -----------------
    ${choreInfo}
    `);
    }
    
    displayChores() {
    let choreString = '';
    for (let i = 0; i < this.chores.length; i++) {
    choreString += i+ ') ' + this.chores[i].name + '\n';
    }
    alert(choreString);
    }
    
    createChore() {
    let name = prompt('Enter name for new chore: ');
    this.chores.push(new Chore(name));
    }
    
    viewChore() {
    let index = prompt("Enter the index of the chore that you want to view:");
    if (index > -1 && index < this.chores.length) {
    this.selectedChore = this.chores[index];
    let description = 'Chore Name: ' + this.selectedChore.name + '\n';
    description += ' ' + this.selectedChore.describe() + '\n ';
    for (let i = 0; i < this.selectedChore.persons.length; i++) {
    
    description += i + ') ' + this.selectedChore.persons[i].describe() + '\n';
    }
    let selection1 = this.showChoreMenuOptions(description);
    switch (selection1) {
    case '1' :
    this.createPerson();
    break;
    case '2' :
    this.deletePerson();
    }
    } 
    }
    
    deleteChore() {
    let index = prompt('Enter the index of the chore that you wish to delete: ');
    if (index > -1 && index < this.chores.length) {
    this.chores.splice(index,1);
    }
    }
    
    
    createPerson() {
    let name = prompt('Enter name for new player: ');
    let day = prompt('Enter day for new person: ');
    
    this.selectedChore.persons.push (new Person(name,day));
    }
    
    deletePerson() {
    let index = prompt('Enter the index of the person that you wish to delete: ');
    if (index > -1 && index < this.selectedChore.persons.length) { this.selectedChore.persons.splice(index,1);
    }
    }
    }
    let menu = new Menu();
    menu.start(); 

