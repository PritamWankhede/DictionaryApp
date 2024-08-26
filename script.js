const input = document.querySelector('input');
const btn = document.querySelector('button');
const dictionary =  document.querySelector('dictonary');



async function dicFn(word){
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const json = await res.json();
  console.log(json);
}

btn.addEventListener('click',fetchCard);

async function fetchCard(){
  const  data = await dicFn(input.value);
  console.log(data);

 let arr =[];


  dicFn.innerHTML =`
   <div class="card">
                <span>
                    word : 
                </span>
                <span>

                </span>
             </div>

             <div class="card">
                <span>
                    phonetic : 
                </span>
                <span>
                    
                </span>
             </div>

             <div class="card">
                <span>
                    Defination : 
                </span>
                <span>
                    
                </span>
             </div>

             <div class="card">
                <span>
                    Example : 
                </span>
                <span>
                    
                </span>
             </div>

             <div class="card">
                <span>
                 Part Of Speech : 
                </span>
                <span>
                    
                </span>
             </div>
            </div>
            </div>
  `

}



