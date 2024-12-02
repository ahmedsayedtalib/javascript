        
            let toDoList = []

            function renderToDoList () {
                let toDoListHTML = ''

                for (let i = 0; i < toDoList.length; i++) {

                    const todoObject = toDoList[i]
                    // const name = todoObject.name
                    // const dueDate = todoObject.dueDate
                    const {name,dueDate} = todoObject // a shortcut for the above variables


                    const html = `<div>${i+1}) ${todoObject.name}</div>
                    <div> ${todoObject.dueDate} </div>
                                  <button class="deleteBtn" onclick="
                                  toDoList.splice(${i},1)
                                  renderToDoList()">
                                  Delete</button>
                                  `
                    toDoListHTML += html
                }    

                document.querySelector('.js-todo-list').innerHTML = toDoListHTML
            }

            function addTodo() {
                const inputElement = document.querySelector('.js-name-input')
                const name = inputElement.value
                const dateElement = document.querySelector('.js-due-date-input')
                const dueDate = dateElement.value
                if (name.trim() !== "") { 
                    toDoList.push({name,dueDate})
                }
                inputElement.value = ''
                renderToDoList()
            }

            renderToDoList()