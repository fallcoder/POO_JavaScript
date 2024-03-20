# Explanation of JavaScript Functions in Lecture Schedule Management System
This JavaScript code is an example demonstrating the use of prototypes and constructors to create objects and their associated methods. 

# Features:
1. **Lecture Constructor Function :**
This function serves as a constructor to create objects of type "Lecture". It takes two parameters: the conference name and the teacher's name, and then assigns them to the name and teacher properties, respectively.
2. **Lecture Prototype Method :**
This method is added to the prototype of the Lecture object. It generates a string describing the conference based on its name and the teacher.
3. **Schedule Constructor Function :**
This function serves as a constructor to create objects of type "Schedule". It takes an array of objects of type "Lecture" as a parameter and assigns them to the lectures property.
4. **Schedule Prototype Method :**
This method is added to the prototype of the Schedule object. It iterates through the array of conferences and calls the display() method for each conference, then concatenates the results into a single string.
5. **Creating Schedule Object :**
A new object of type "Schedule" is created with a pre-filled array of conferences. Each conference is an object of type "Lecture" with its corresponding name and teacher.
6. **Displaying Schedule Information :**
Finally, the schedule information is displayed in a dialog box by calling the display() method of the mySchedule object, which iterates through all conferences and displays their information using the display() method of each Lecture object.

# Usage
* Clone the Project
* Navigate to the Project Directory
* Open the index.html File in a Browser

# Author
* Developed by Mouhamed Fall
* Email : mouhamedfall056@gmail.com
* Github : [@fallcoder](https://github.com/fallcoder)

