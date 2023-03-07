function popup() {
  var StudentId = document.getElementById('STID').value;
  document.getElementById('STID1').innerHTML = StudentId;

  var courses = document.getElementById('input-course').value;
  var Subjects = document.getElementById('input-subject').value;

  var nameofstudent = document.getElementById('input-FN').value;
  var Middle = document.getElementById('inputMD').value;
  var lastname = document.getElementById('inputLN').value;
  var fullname = lastname + ',' + nameofstudent + ',' + Middle + '.';

  var prelim = parseInt(document.getElementById('input-prelim').value);
  var midterm = parseInt(document.getElementById('input-midterm').value);
  var final = parseInt(document.getElementById('input-final').value);
  var total = (prelim + midterm + final) / 3;

  document.getElementById('final-grades').innerHTML = total + '%';
  document.getElementById('STUD').innerHTML = fullname;

  /**********************************************************COURSE************************************/
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
  /**********************************************************SUBJECT*********************************/

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
  /**********************************************************GRADES***************************************/
  if (total >= 99 && total <= 100) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.00';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 96 && total <= 98.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.25';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 93 && total <= 95.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.50';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 90 && total <= 92.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '1.75';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 87 && total <= 89.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.00';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }

  if (total >= 84 && total <= 86.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.25';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 81 && total <= 83.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.50';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 78 && total <= 80.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '2.75';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total >= 75 && total <= 77.99) {
    document.getElementById('grades-remark').innerHTML = 'Passed';
    document.getElementById('equa').innerHTML = '3.00';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }
  if (total < 75.99) {
    document.getElementById('grades-remark').innerHTML = 'Failed';
    document.getElementById('equa').innerHTML = '5.00';
    document.getElementById('result').style.display = 'block';
    document.getElementById('text-result').style.display = 'none';
    document.getElementById('resetly').style.display = 'block';
    document.getElementById('submitted').style.display = 'none';
  }

  if (course < 75.99) {
    document.getElementById('grades-remark').innerHTML = 'Failed';
    document.getElementById('equa').innerHTML = '5.00';
  } /**********************************************************if 101 above***********************/ else if (prelim >= 101) {
    alert('INVALID GRADES  ' + prelim);
    document.getElementById('input-prelim').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  } else if (midterm >= 101) {
    alert('invalid grades  ' + midterm);
    document.getElementById('input-midterm').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  } else if (final >= 101) {
    alert('invalid grades  ' + final);
    document.getElementById('input-final').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  } else if (prelim <= 60) {
    /**********************************************************if 60 below***********************/
    alert('invalid grades  ' + prelim);
    document.getElementById('input-prelim').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  } else if (midterm <= 60) {
    alert('invalid grades  ' + midterm);
    document.getElementById('input-midterm').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  } else if (final <= 60) {
    alert('invalid grades  ' + final);
    document.getElementById('input-final').value = '';
    document.getElementById('text-result').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetly').style.display = 'none';
    document.getElementById('submitted').style.display = 'block';
  }
}
/**********************************************************RESET***********************************/
function popreset() {
  document.getElementById('STID').value = '';
  document.getElementById('input-FN').value = '';
  document.getElementById('inputMD').value = '';
  document.getElementById('inputLN').value = '';
  document.getElementById('input-course').value = '0';
  document.getElementById('input-subject').value = '0';
  document.getElementById('input-prelim').value = '';
  document.getElementById('input-midterm').value = '';
  document.getElementById('input-final').value = '';
  document.getElementById('text-result').style.display = 'block';
  document.getElementById('result').style.display = 'none';
  document.getElementById('resetly').style.display = 'none';
  document.getElementById('submitted').style.display = 'block';
}
/**********************************************************LOADING************************************/
function showload() {
  document.getElementById('load').style.display = 'block';
  document.getElementById('text-result').style.display = 'none';
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
