const login_menu = document.getElementById('login-menu');
const head_top_right = document.querySelectorAll('.head-top-right');

login_menu.addEventListener('click',()=>{
	head_top_right.forEach((value)=>{
		value.style.display = 'block';
	})
});
			