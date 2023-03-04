function popup(){
    var StudentId = document.getElementById('STID').value;  
    document.getElementById('STID1').innerHTML = StudentId;

    var courses = document.getElementById('input-course').value;
    var Subjects = document.getElementById('input-subject').value;

    var nameofstudent = document.getElementById('input-FN').value;
    var Middle = document.getElementById('inputMD').value;
    var lastname = document.getElementById('inputLN').value;
    var fullname = lastname + ', ' + nameofstudent + ', ' + Middle;

    var prelim = parseInt(document.getElementById('input-prelim').value);
    var midterm = parseInt(document.getElementById('input-midterm').value);
    var final = parseInt(document.getElementById('input-final').value);
    var total = (prelim + midterm + final) / 3;

    document.getElementById('final-grades').innerHTML = total;
    document.getElementById('STUD').innerHTML = fullname;


//Course
if (courses == 1) {
  document.getElementById('course').innerHTML = 'DICT.';
}
if (courses == 2) {
  document.getElementById('course').innerHTML = 'Arts and Sciences.';
}
if (courses == 3) {
  document.getElementById('course').innerHTML = 'Criminal Justice.';
}
if (courses == 4) {
  document.getElementById('course').innerHTML = 'Education.';
}
if (courses == 5) {
  document.getElementById('course').innerHTML = 'BS in Nursing.';
}


//Subject
if (Subjects == 1) {
  document.getElementById('Subjectly').innerHTML = 'Math.';
}
if (Subjects == 2) {
  document.getElementById('Subjectly').innerHTML = 'English.';
}
if (Subjects == 3) {
  document.getElementById('Subjectly').innerHTML = 'Web Technology';
}
if (Subjects == 4) {
  document.getElementById('Subjectly').innerHTML = 'Foreign Language.';
}
if (Subjects == 5) {
  document.getElementById('Subjectly').innerHTML = 'Networking..';
}
if (total >= 99 && total <= 100) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '1.00';
}
if (total >= 96 && total <= 98.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '1.25';
}
if (total >= 93 && total <= 95.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '1.50';
}
if (total >= 90 && total <= 92.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '1.75';
}
if (total >= 87 && total <= 89.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '2.00';
}

if (total >= 84 && total <= 86.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '2.25';
}
if (total >= 81 && total <= 83.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '2.50';
}
if (total >= 78 && total <= 80.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '2.75';
}
if (total >= 75 && total <= 77.99) {
  document.getElementById('grades-remark').innerHTML = 'Passed';
  document.getElementById('equa').innerHTML = '3.00';
}
if (total < 75.99) {
  document.getElementById('grades-remark').innerHTML = 'Failed';
  document.getElementById('equa').innerHTML = '5.00';
}

if (course < 75.99) {
  document.getElementById('grades-remark').innerHTML = 'Failed';
  document.getElementById('equa').innerHTML = '5.00';
}




    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
}
function showload() {
    document.getElementById('load').style.display = 'block';
  }
  function hideload() {
    document.getElementById('load').style.display = 'none';
  }
function allfunct() {
    setTimeout(showload, 1);
    setTimeout(hideload, 3000);
    setTimeout(popup, 3010);
  
    return false;
  }