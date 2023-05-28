
import React,{useState} from "react";
import Moveable from "react-moveable";
import './App.css';


function App() {
  const targetRef = React.useRef("null");

  const [first, setfirst] = useState("Drag this div ")

  function editFun(e)
  {
    targetRef.contenteditable=true;
    setfirst(first);
    console.log(e.target.outerText);
  }

  return (
    
    <div className="App">
      <div className="container" >
                <div contenteditable="true" onClick={(e)=>editFun(e)} className="target" ref={targetRef} > {first}</div>
                <Moveable
                    target={targetRef}
                    draggable={true}
                    resizable={true}
                    throttleDrag={1}
                    keepRatio={false}
                    throttleResize={1}
                    edgeDraggable={false}
                    startDragRotate={1}
                    renderDirections={["nw","n","ne","w","e","sw","s","se"]}
                    throttleDragRotate={0}
                    onDrag={e => {e.target.style.transform = e.transform;
                    }}
                    onResize={e => {
                        e.target.style.width = `${e.width}px`;
                        e.target.style.height = `${e.height}px`;
                        e.target.style.transform = e.drag.transform;
                    }}
                />
        </div>
      
    </div>
  );
}

export default App;
