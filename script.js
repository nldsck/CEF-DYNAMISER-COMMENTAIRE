


var firstname = document.getElementById("first-name");
var lastname = document.getElementById("last-name");
var message = document.getElementById("message");
var error = document.getElementById("error-message");
var commentlist = document.getElementById("comment-list");




Form.addEventListener('submit', function(event){ 
    var flag= false;
	flag=flag || (firstname.value=="");
	flag=flag || (lastname.value=="");
	flag=flag || (message.value.trim() === "");
	if (flag = true)
	{
		error.style.display='block';
		event.preventDefault()
		
		}
    
    
 
        else{
            let Div1 = document.createElement('Div1'); // on cree une div1
            let newContent = document.createTextNode;
            Div1.appendChild(newContent);
            Div1.classList.add('prose', 'prose-sm','mt-4', 'max-w-none', 'text-gray-500Content');
    
            let Div2 = document.createElement('Div2');
            let newContent2 = document.createTextNode;
            newContent2 = firstNameInput.value + "" + lastNameInput.value;
            newContent2.classList.add('font-medium', 'text-gray-900');
            Div2.appendChild(newContent2);
            Div2.classList.add('flex-1', 'py-10','border-t','border-gray-200');
    
            Div2.appendChild(Div1);
    
            let Div = document.createElement('Div');
            Div.classList.add('flex','space-x-4',' text-sm',' text-gray-500');
            Div.appendChild(Div2);
            comment-list.appendChild(Div2);
    
    
    
        }
    },false);
    
    
                                      
    
       
        

   












































