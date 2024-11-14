
import { useState } from "react"
import MadlibInput from './MadlibInput'
import { buildStory } from './madlib-utils'

function arrayOfEmptyStrings(n) {
    let a = [];
    for (let i=0; i<n; i++) {
        a[i] = '';
    }
    return(a);
}

function MadlibInputs({storySkel, fills, setStoryFn}) {
    const [vals, setVals] = useState(arrayOfEmptyStrings(fills.length));
    const changeVal = ((index, val) => {
        const newVals = [...vals];
        newVals[index] = val;
        setVals(vals => newVals);
    });
    const MakeStory = e => {
       e.preventDefault();
       const story = buildStory(storySkel, vals);
       setStoryFn(story);
    }
    return (
        <>
          <div align="center">
            <form> 
               {fills.map((fill, i) => <MadlibInput key={i} placeholder={fill} changeFn = {val => changeVal(i, val)}/>)}
               <div style={{height:"15px"}}> </div>
               <button onClick={MakeStory}>Make Story</button>
            </form>
          </div>
        </>
    )
}

export default MadlibInputs
