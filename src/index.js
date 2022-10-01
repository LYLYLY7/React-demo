import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
let n = 0
const App1 =()=> React.createElement("div", {className: "red"}, [n,
    React.createElement('button', {
        onClick: () => {
            n += 1
            root.render(
                App1()
            );

        }
    }, "+1")
])
root.render(App1())