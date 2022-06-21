// fetch kullanarak API'dan veri çekiyoruz

const students = await fetch("./data.json")
  .then((res) => res.json())
  .then((data) => data);

// öğrencileri grup isimlerine göre array'de gruplandırma

const checkStudents = function (groupName) {
  let studentsArray = [];
  students.forEach((el) => {
    if (el.group === groupName) studentsArray.push(el);
  });
  console.log(studentsArray);
  return studentsArray;
};

checkStudents("DeepPink");

// asistanlık durumunu true/false şeklinde konsollama

const checkIfAssistant = (studentName) => {
  students.forEach((el) => {
    if (el.name === studentName) {
      if (el.assistant) {
        console.log(el.assistant);
      } else {
        console.log(el.assistant);
      }
    }
  });
};
checkIfAssistant("Derya");
