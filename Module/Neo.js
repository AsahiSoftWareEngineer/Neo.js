


const Button = (data={}, handler={}) => {
    let button = document.createElement('button');
    button.textContent = data.text;
    button.className = data.className;
    button.id = data.id;
    if(handler.onclick){
          button.onclick = handler.onclick;
    }
  
    return button
}

const Text = (data={}, handler={}) => {
    let label = document.createElement('span');
    label.textContent = data.text;
    label.className = data.className;
    label.id = data.id;
    return label;
}

const Input = (data={}, handler={}) => {
    let inputarea = document.createElement('input');
    inputarea.type = data.type;
    inputarea.id = data.id;
    inputarea.className = data.className;
    inputarea.placeholder = data.placeholder;
    if(handler.onchange){
        inputarea.onchange = handler.onchange;
    }
    return inputarea;
}
const VBox = (data={}) => {
    let vbox = document.createElement('div');
    vbox.style.display = "flex",
    vbox.style.flexDirection = "column"
    return  Box(vbox, data.children);
}

const HBox = (data={}) => {
    let hbox = document.createElement('div');
    hbox.style.display = "flex",
    hbox.style.flexDirection = "row"
    return Box(hbox, data.children);
}


const Box = (parent, children) => {
    if(children){
        children.map((value) => {
            parent.appendChild(value)
        })
    }
    return parent;
}
const Table = (data, items) => {
    let table = document.createElement('table');
    table.className = data.className
    items.map((value) => {
        table.appendChild(Row(value))
    })
    return table;
}

const Row = (item) => {  
    let row = document.createElement('tr')
    item.map((value) => { 
        let cell = document.createElement("td")
        cell.appendChild(value)
        row.appendChild(cell)
    })
    return row;
}




class View {
    constructor(element){
        this.view = document.createElement('div');
        this.element = element; 
        this.element(this).map((value) => {
            this.view.appendChild(value)
        })
    }
}

class Model{
    constructor(state={}){
        this.state = state;
    }
    setState(views, state){
        this.view = views.view
        Object.keys(state).map((key) =>{
            this.state[key] = state[key]
        })
        while(views.view.firstChild )views.view.removeChild( views.view.firstChild );
        views.element(views).map((value) => {
            views.view.appendChild(value)
        })
    }
}

class App{
    constructor(model, views, show=false, method){
        this.method = method(this);
        this.model = model
        this.views = views
        if(show){
             document.body.appendChild(views.view)
        }
    }
}