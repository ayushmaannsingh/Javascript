// Object de-structure..

const course = {
    courseName : "javascript",
    price : "799",
    courseInstructor : "Ayush"
}
//course.courseInstructor 

const{courseInstructor : instructor} = course   // destructure
console.log(instructor);

