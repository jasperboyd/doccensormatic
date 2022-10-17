var textToReplace = 'XXXX';
var keywordsToCensor = [];
var documentText;

init(); 

function init(){ 
	
} 

function enableSubmit(){ 

} 

function resetForm(e){ 
	console.log('resetForm', e); 

	var formElem = document.getElementById('censorDocumentForm');
	formElem.classList.remove('visually-hidden');
	
	var resultElem = document.getElementById('result');
	resultElem.classList.add('visually-hidden');

} 

function onDocumentTextChange(e){
	console.log('onDocumentTextChamge', e.target.value);
	
	if(!e.target.value) return; 
	
	documentText = e.target.value; 

	console.log('documentText', documentText); 
	
	var formElem = document.getElementById('censorDocumentForm');

	formElem.classList.add('was-validated');
}

function onKeywordsToCensorChange(e){
	console.log('onKeywordsToCensorChange', e.target.value);
	
	if(!e.target.value) return; 

	keywordsToCensor = e.target.value.split(','); 

	console.log('keywordsToCensor', keywordsToCensor); 
	
	formElem.classList.add('was-validated');
}

function censorDocument(e){ 
	console.log('censorDocument', e);

	var censoredText = documentText

	for(var i=0; i<keywordsToCensor.length; i++){ 
		let keyword = keywordsToCensor[i];

		if(keyword.substring(0,1) === "'" || keyword.substring(0,1) === '"'){
			keyword = keyword.substring(1, keyword.length-1);  
			console.log('stripping quotes around phrase', keyword ); 
		}
		console.log('censoring keyword', keyword ); 
		censoredText = censoredText.replaceAll(keyword, textToReplace);
	
		//if we were to track the replaced keywords at this point you could store the relationship with the form and the keyword
	}

	console.log('censoredText', censoredText); 
	var elem = document.getElementById('censoredText');

	elem.textContent = censoredText;
	
	var formElem = document.getElementById('censorDocumentForm');
	formElem.classList.add('visually-hidden');
	
	var resultElem = document.getElementById('result');
	resultElem.classList.remove('visually-hidden');
} 
