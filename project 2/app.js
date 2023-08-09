const text=document.querySelector('.text');
const serach=document.getElementById("search");

serach.addEventListener("change",()=>{
	const searchText=serach.value
	const content = text.textContent
	if( searchText!="" &&  content.includes(searchText)){
		const updatedContent = content.replaceAll(searchText, `<span class="highlight">${searchText}</span>`);
       	text.innerHTML = updatedContent;
	}
	else{
		console.log("get the hell out of here")
	}
})