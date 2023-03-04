function popup(){
    var StudentId = document.getElementById('STID').value;  
    document.getElementById('STID1').innerHTML = StudentId;


    document.getElementById('text-result').style.display = 'none';
    document.getElementById('result').style.display = 'block';
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