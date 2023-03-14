


window.onload = () => {

    let MainModel = new Model({count: 0, todo: []})
    let MainView = new View(() => {
        return [
            VBox({
                className: 'v-box',
                children: [
                    Table({className: 'todo-list'}, MainModel.state.todo),
                    Input({id: 'todo-input'}),
                    Button({text: "Test"}, {onclick: () => {MainApp.method.onclick()}}),   
                ]
            })
        ]
    })
    

    let MainApp = new App(MainModel, MainView, true, (app) => {
        return {
            onclick: () => {
                let item = [Text({text: document.getElementById("todo-input").value})]
                app.model.state.todo.push(item)
                app.model.setState(app.views, {todo: app.model.state.todo})
            }
        }
    })
}
