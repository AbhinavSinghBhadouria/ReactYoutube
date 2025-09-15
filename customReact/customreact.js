function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */
   // now using modular approach 

   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    if(prop === 'children'){
        continue;
    }
    domElement.setAttribute(prop,reactElement.props[prop]);

   }
   container.appendChild(domElement)
}

//Props in React (short for "properties") are special objects used to pass data and 
//configuration from a parent component to its child components. They enable components
//to receive values or functions from outside, making components reusable and dynamic.
const reactElement={
    type:'a',
    props: {
        href:'https://www.youtube.com',
        target: '_blank'

    },
    children: 'click me to visit youtube'
}
const mainContainer = document.querySelector('#root')


customRender(reactElement, mainContainer)