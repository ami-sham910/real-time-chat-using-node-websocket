const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector("container");


const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);

}

const names = prompt("Enter Name TO Join Chat");
socket.emit('new-user-joined', names)

socket.on('user-joined', data => {
append(`${names} join Chat`, 'right')
})