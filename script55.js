const inputData = [
    {name:"Name",type:"text",placeholder:"Enter your name",class:"border border-1 border-black rounded-md m-3", reference:"input"},
    {name:"Email",type:"email",placeholder:"Enter your Email",class:"border border-1 border-black rounded-md m-3",reference:"input"},
    {name:"Password",type:"password",placeholder:"password",class:"border border-1 border-black rounded-md m-3",reference:"input"},
    {name:"Radio",options:['option_1','option_2','option_3'],type:"radio",placeholder:"click on this",class:"",reference:"input"},
    {name:"Select",options:['Option 1','Option 2','Option 3'],type:"",placeholder:"",class:"border border-1 border-black rounded-md m-3",reference:"select"},
    {name:"Check-Box",options:['Option_A','Option_B','Option_C'],type:"checkbox",placeholder:"choose",class:"",reference:"input"},
    {name:"Search",type:"search",placeholder:"Search for something",class:"border border-1 border-black rounded-md m-3",reference:"input"},
    {name:"Color",type:"color",placeholder:"Enter color",class:"border border-1 border-black rounded-md m-3",reference:"input"},
    {name:"Submit",type:"submit",placeholder:"",class:"bg-blue-500 text-white p-1 rounded-2xl",reference:"button"},
    {name:"Avatar",type:"text",placeholder:"Enter URL",class:"w-20 h-20",reference:"image"}
];

let formContainer = document.getElementById("formcontainer");

inputData.forEach((item)=>{
    
    if(item.reference == "input"){
        
        formContainer.appendChild(namelabel(item.name));

        let inputElement = document.createElement("input");
        
        inputElement.name = item.name;

        if (inputElement.name == 'Radio'){

            formContainer.appendChild(document.createElement("br"));
            
            for(let i = 1 ; i <= 3 ; i++){
                let input1Element = document.createElement("input");

                let label1Element = document.createElement("label");
                
                input1Element.type = item.type;

                input1Element.name = "options";

                input1Element.className = item.class;

                label1Element.appendChild(input1Element);

                label1Element.appendChild(document.createTextNode(item.options[i-1]));
                
                if( i <= 2){

                    label1Element.appendChild(document.createElement("br"));
 
                }

                formContainer.append(label1Element);
            }
        }
        
        else if (inputElement.name == 'Check-Box'){
            
            formContainer.appendChild(document.createElement("br"));

            for(let i = 1 ; i <= 3 ; i++){
                let input2Element = document.createElement("input");

                let label2Element = document.createElement("label");
                
                input2Element.type = item.type;

                input2Element.name = "options";

                input2Element.className = item.class;

                label2Element.appendChild(input2Element);

                label2Element.appendChild(document.createTextNode(item.options[i-1]));
                
                if( i <= 2){

                    label2Element.appendChild(document.createElement("br"));
 
                }

                formContainer.append(label2Element);
            }
        }

        else{
            inputElement.placeholder = item.placeholder;
            inputElement.className = item.class;
            inputElement.type = item.type;
            formContainer.appendChild(inputElement);
        }

    }else if(item.reference == "button"){

        formContainer.appendChild(namelabel(item.name));
        
        let buttonElement = document.createElement("button");

        buttonElement.type = item.type;

        buttonElement.name = item.name;

        buttonElement.className = item.class;

        buttonElement.textContent = "Submit";

        formContainer.appendChild(buttonElement);
    
    }else if(item.reference == "select"){
 
            
        formContainer.appendChild(namelabel(item.name));

        let selectElement = document.createElement("select");

        selectElement.name = item.name;

        selectElement.className = item.class;


        for(let i=0 ; i < 3 ; i++){

            let optionElement = document.createElement("option");
    
            optionElement.text = item.options[i];
    
            optionElement.value = i;
    
            selectElement.appendChild(optionElement);
        }

        formContainer.appendChild(selectElement);
        

    }else if (item.reference == "image"){

        let labelimgElement = document.createElement("label");

        labelimgElement.className = "flex";
       
        let imageElement = document.createElement("img");

        imageElement.src = "profile.png";

        imageElement.alt = item.name;

        imageElement.className = item.class;

        labelimgElement.append(namelabel(item.name),imageElement);

        formContainer.appendChild(labelimgElement);
    }

    formContainer.appendChild(document.createElement("br"));
});

function namelabel(Str){

    let spanElement = document.createElement("span");

    if(Str == "Name") {
        spanElement.textContent = "Name   : ";
        returnValue = spanElement;
    }else if(Str == "Email"){
        spanElement.textContent = "Email   : ";
    }else if(Str == "Password"){
        spanElement.textContent = "Password   : ";
    }else if(Str == "Radio"){
        spanElement.textContent = "Radio   : ";
    }else if(Str == "Select"){
        spanElement.textContent = "Select   : ";
    }else if(Str == "Check-Box"){
        spanElement.textContent = "Check-Box   : ";
    }else if(Str == "Search"){
        spanElement.textContent = "Search  : ";
    }else if(Str == "Color"){
        spanElement.textContent = "Color  : ";
    }else if(Str == "Submit"){
        spanElement.textContent = "";
    }else if(Str == "Avatar"){
        spanElement.textContent = "Avatar  : ";
    }
    
    return spanElement;
}