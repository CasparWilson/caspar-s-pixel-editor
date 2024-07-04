import {palette} from "./components/palette"
import React from 'react'

function App(props) {

    
    const pixelStateObject = {}
    for(let i=0; i < props.gridLength**2; i++){
        pixelStateObject[i]='#FFFFFF'
    }

    const[editorState, setEditorState] = React.useState(
        {colourSelected: '#FFFFFF', ...pixelStateObject}
    )

    const pixels=[]
    for(let i=0; i < props.gridLength**2; i++){
        pixels.push(<button key={i} className="pixel"
            style={{backgroundColor: editorState[i]}}
            onClick={()=> setEditorState((prevState) => {
                console.log(prevState)
                return {...prevState, [i]: prevState.colourSelected}})}/>)
        }

    const paletteButtons=palette.map((colour)=> {
    return (<button key={colour} className="palette-selection"
        style={{backgroundColor: `${colour}`}} onClick={()=> setEditorState(
            (prevState) => ({...prevState, colourSelected: colour}
            )            
        )}/>
    )})

    return (
        <div>
            <h1>Pixel Editor</h1>
            <div className="pixel-grid">
                {pixels}
            </div>
            
            <h3>Pick a Colour!</h3>
            <div className='palette-display'>
                {paletteButtons}
            </div>
        </div>
        
    );
}

export default App;
