 import ColorBox from "./ColorBox"
import "./colorboxes.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ColorBoxes({colors}){
    return(
        <div className="container" style={{border:'black 5px solid'}}>
            <div className="row">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            </div>
            <div className="row">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            </div>
            <div className="row">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            </div>
            <div className="row">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            </div>
            <div className="row">
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            <ColorBox colors={colors} />
            </div>
        </div>
    )

}