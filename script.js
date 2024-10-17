

var form = document.getElementsByTagName("form")[0];
var firstname = document.getElementById("first-name");
var lastname = document.getElementById("last-name");
var message = document.getElementById("message");
var error = document.getElementById("error-message");
var commentlist = document.getElementById("comment-list");




form.addEventListener(
    "submit", function(event){ 
    var flag= false;
	flag=flag || (firstname.value=="");
	flag=flag || (lastname.value=="");
	flag=flag || (message.value.trim() === "");
	if (flag == true)
	{
		error.style.display='block';
		event.preventDefault()
		
		}
    
    
 
        else{
            error.style.display='none';
            let paragraf = document.createElement('div');
            paragraf.textContent = message.value;
            paragraf.classList.add('prose', 'prose-sm','mt-4', 'max-w-none', 'text-gray-500');
            let nom= document.createElement('h3');
            nom.textContent = firstname.value+" "+ lastname.value;
            nom.classList.add('font-medium' ,'text-gray-900');
            let comment = document.createElement('div');
            comment.classList.add('flex-1', 'py-10','border-t','border-gray-200');
            comment.appendChild(nom);
            comment.appendChild(paragraf);
            let commentdiv= document.createElement('div');
            commentdiv.classList.add('fflex', 'space-x-4' ,'text-sm' ,'text-gray-500');
            commentdiv.appendChild(comment)
            commentlist.appendChild(commentdiv);
            form.reset();
            }
        
        
    
    },false,
    );
    
                                      
    
       
        

   












































