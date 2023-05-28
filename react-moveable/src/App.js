
import React,{useState} from "react";
import Moveable from "react-moveable";
import './App.css';
import {Editor, EditorState} from 'draft-js';
import { flushSync } from "react-dom";

function App() {
  const targetRef = React.useRef("null");

  const [first, setfirst] = useState(EditorState.createEmpty())

  function editFun(e)
  {
    targetRef.contentEditable=true;
    targetRef.current.focus();
  }
  
  React.useEffect(() => {
    editFun();
  }, []);

  return (
    
    <div className="App">
      <div className="container" >
                <div  contenteditable="true" className="target"  onClick={(e)=>editFun(e)}  ref={targetRef} > 
                Write Here...
                <Editor
                    editorState={first !== 0 ?first: "write here..."}
                    onChange={first => setfirst(first)}
                  > write here... </Editor>
                </div>
                <Moveable
                    flushSync={flushSync}
                    target={targetRef}
                    draggable={true}
                    resizable={true}
                    throttleDrag={0}
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
