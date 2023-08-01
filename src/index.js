import './firebase/config.firebase.js'
import { createUserWithEmailAndPassword  } from 'firebase/auth'
import { auth } from './firebase/config.firebase.js'
import './style.css';


document.querySelector('#form__signUp').addEventListener('submit', async(e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        
    } catch (error) {
        const errorMessage = document.querySelector('.errorMessage');
        const { name, message } = error;
        errorMessage.textContent = message;
    }
})