const watchList=document.getElementById("watchList")
const signIn=document.getElementById("signIn")
const close=document.querySelector(".close")
const dropdownContent2=document.querySelector(".dropdown-content2")
const modal = document.getElementById("myModal");
const span = document.querySelector(".closeSpan");
const mySidenav=document.getElementById("mySidenav")

watchList.addEventListener("click",()=>{
	dropdownContent2.style.display="block"
})

close.addEventListener("click",(event)=>{
	event.stopPropagation();
	dropdownContent2.style.display = "none";
})

signIn.addEventListener('click',()=>{
	modal.style.display="block"
})

span.addEventListener('click',(event)=>{
	modal.style.display="none"
})
	
window.addEventListener('click',(event)=>{
	if (event.target == modal) {
		modal.style.display = "none";
	}
	if (!event.target.closest("#mySidenav") && !event.target.closest("#hambMenu")) {
		mySidenav.style.width = "0";
	 }
})

function openNav() {
	mySidenav.style.width = "250px";
}
	   

		