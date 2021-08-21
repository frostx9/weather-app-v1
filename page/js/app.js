
const weatherForm = document.querySelector('form')     // form from index.html..targeting
const search = document.querySelector('input')
const msgone = document.querySelector('#msgone')
const mshtwo = document.querySelector('#msgtwo')

msgone.textContent=''
msgtwo.textContent=''

weatherForm.addEventListener('submit',(e)=>{            //  e.preventDefault() ...stop default action...stop refresh the page, event = e
    e.preventDefault()
    const location = search.value       // related with const search = document.querySelector('input')...value is a htnl property.....grabing the input value and save into location variable
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msgone.textContent=data.error
            }else{

                msgone.textContent=data.Temp
                mshtwo.textContent=data.Location
            //     console.log(data.Temp)
            //     console.log(data.Location)
                
             }
            
        })
    })
})

