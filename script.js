

const main = () => {
   const growMe = document.getElementById('grow-me');
   growMe.classList.add('big'); 
   const shrinkMe = document.getElementById("shrink-me");
shrinkMe.classList.remove("big");

document.querySelectorAll('li').forEach((node)=> {
console.log(node.innerText);
});

const link = document.querySelector('.link');

link.href = 'https://www.example.com'
link.textContent = 'somewhere';

document.getElementById('hide-me').style.display = 'none';
document.getElementById('show-me').style.display = 'block';

const name = document.getElementById('name').value;

document.querySelector('h1').innerText = `Welcome ${name}`;



}

