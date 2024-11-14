### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a framework for developing interactive web pages, built as a library on top of Javascript, where individual React "components" include aspects of HTML, CSS formatting, and Javascript code (for interactivity). React components can be constructed by combining and nesting them to form more complex web pages in a modular way. 

- What is Babel?
- What is JSX?

Babel is a library that "transpiles" from JSX syntax to plain Javascript syntax.
React uses JSX files because React function can return HTML-type constructs as if
they were actual data types in the language. This variation in syntax requires some translation in order for the JSX code to run properly on web pages - which run only Javascript.

- How is a Component created in React?

A React Component is created by declaring a function using the component name. The component returns code that looks similar to HTML, possibly including other React components.

- What are some differences between state and props?

Props are fixed attributes of a React component and are immutable.
They are available as arguments to the function representing the component.
State is information that can be changed in a component and must be declared explicitly within the component.  States can not be declared inside conditionals or loops.

- What does "downward data flow" refer to in React?

Data usually flows from parent components to child components, most likely from states (or props) at a parent to props at a child. Re-renders of parents result in re-renders of all children.

- What is a controlled component?

A controlled component means a React component (usually for input) where all
edits to the input fields are relayed through the React infrastructure.
That means that field can't even be typed into without some sort of callback on the React side.

- What is an uncontrolled component?

Uncontrolled components are React components that (usually for input) that are just 
plain vanilla Javascript elements. React doesn't help nor hinder them.

- What is the purpose of the `key` prop when rendering a list of components?

React looks at the structure of the DOM to distinguish elements from each other.
In situations where elements can be easily confused with each other, so as in an array of near-interchangeable elements, the result can be erroneous or unintended behavior in rendering (or not) of particular React components. Unique key values  allows React to determine which elements are which so that this confusion doesn't happen.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Array index is a poor choice because the key should ideally be unique and immutable. If elements are removed from an array, then the keys (which are indexes) might now be associated with different array elements (what was the fifth element is now the fourth) and may result in confusing React about which elements are which.

- Describe useEffect.  What use cases is it used for in React components?

useEffect is used to, in some sense, "tweak" a React component to run particular functionality under certain conditions. For example, to let a React component "know" that it needs to re-render if a particular state variable changes - or to cause some functionality to be run just once on page refresh, but not on every re-render of the component. It can also be used for "cleanup" purposes, to run some functionality if the component is removed from the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef creates an object that is scoped locally to the React component, but 
whose value persists across renders. The value is independent of renders, so changing the value would not cause a re-render.

- When would you use a ref? When wouldn't you use one?

You would most likely use a ref to have a handle to some part of the DOM
that you would need to access frequently. You could also use it to store
information scoped to the component that you would otherwise need to use a global variable for (e.g. intervalID from setInterval).

- What is a custom hook in React? When would you want to write one?

A custom hook could be used in cases where much code would be otherwise duplicated
with minor variations. It would represent a way to make that code more modular and readable. A custom hook could be useful, for example, for extracting code to use a buttons to toggle different state variables.