const username = document.getElementById('username')
const password = document.getElementById('password')
const contact = document.getElementById('contact')
const email = document.getElementById('email')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = [] 
    if ( username.value === '' || username.value == null ){
        messages.push('Name is required\n')
    }
    if (contact.value.length != 10) {
        messages.push('Conatct number should be of 10 digits\n')
    }
    if ( email.value ==='' || email.value == null ) {
        messages.push('Please fill out email\n')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('')  
    }
    else{
        alert("Your respnse is recorded!")
    }
})

