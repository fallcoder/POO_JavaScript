// The constructor for our 'Lecture', takes two strings, name and teacher
function Lecture (name, teacher) {
    this.name = name;
    this.teacher = teacher;
};

// A method of the Lecture class, used to generate, a string that can be used to display Lecture information
Lecture.prototype.display = function() {
    return this.teacher + " is teaching " + this.name;
};

// A Schedule constructor that takes in an array of lectures
function Schedule(lectures) {
    this.lectures = lectures;
}

// A method for constructing a string representing a Schedule of Lectures
Schedule.prototype.display = function() {
    var str = "";

    for (i=0; i < this.lectures.length; i++) 
        str += this.lectures[i].display() + " ";

    return str; 
};

// Create a new Schedule object and save it in the variable 'mySchedule'
var mySchedule = new Schedule ([
    new Lecture("Pyhton\n", "Mr. Smith"),
    new Lecture("Algo\n", "Mr. Mendy"),
    new Lecture("JAVA\n", "Mr. Sow"),
    new Lecture("C++", "Mrs Marogo")
]);

// Display the Schedule information as a pop-up alert
alert(mySchedule.display());



