const todo = [];

function generateTodoText() {
    let todoHTML = '';

    // for (let u = 0; u < todo.length; u++) {
    //     const html = `
    //     <div>${todo[u].name}</div>
    //     <div>${todo[u].date}</div>
    //     <button class="delete-button" onclick="deleteEntry(${u})">Delete</button>
    //     `;
    //     todoHTML += html;
    // }

    todo.forEach(({name, date}, index) => {
        const html = `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-button" onclick="deleteEntry(${index})">Delete</button>
        `;
        todoHTML += html;
    })

    document.querySelector('.todo-list').innerHTML = todoHTML;
}

function addTodo() {
    const name = document.querySelector('.name-input').value;
    const date = document.querySelector('.date-input').value;
    todo.push({name, date});
    console.log(todo);
    generateTodoText();
}

function deleteEntry(index) {
    todo.splice(index, 1);
    generateTodoText();
}