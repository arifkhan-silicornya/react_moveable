
import * as React from "react";
import Moveable from "react-moveable";
import './App.css';


function App() {
  const targetRef = React.useRef("null");
  return (
    <div className="App">
      <div className="container">
                <div className="target" ref={targetRef}>Drag this div</div>
                <Moveable
                    target={targetRef}
                    draggable={true}
                    throttleDrag={1}
                    edgeDraggable={false}
                    startDragRotate={0}
                    throttleDragRotate={0}
                    onDrag={e => {e.target.style.transform = e.transform;
                    }}
                />
            </div>
    </div>
  );
}

export default App;
