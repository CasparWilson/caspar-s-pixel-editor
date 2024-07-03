import {palette} from "./components/palette"

function App(props) {

    const pixels=[]
    for(let i=0; i < props.gridLength**2; i++){
        pixels.push(<button key={i} className="pixel"></button>)
    }

    const paletteButtons=palette.map((colour)=> {
    return (<button key={colour} 
        style={{backgroundColor: `#${colour}`}}/>
    )})

    console.log(palette, paletteButtons)

    return (
        <div>
            <h1>Pixel Editor</h1>
            <div className="pixel-grid">
                {pixels}
            </div>
            
            <h3>palette</h3>
            <div className='paletteDisplay'>
                {paletteButtons}
            </div>
        </div>
        
    );
}

export default App;
