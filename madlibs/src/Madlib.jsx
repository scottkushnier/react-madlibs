
import { useState } from "react"
import { extractStoryAndFills } from './madlib-utils'
import MadlibInputs from './MadlibInputs'

const storyPattern = "Hello my name is <name>. I am a <color> <animal>."

// const storyPattern = "This weekend I am going camping with <name>. I packed my lantern, sleeping bag,\
//  and <noun>. I am so <adjective (feeling)> to <verb> in a tent. I am <adjective (feeling)> we might\
//  see a <animal>, they are kind of dangerous. We are going to hike, fish, and <verb>. I have heard\
//  that the <color> lake is great for <verb (ending in 'ing')>. Then we will <adverb (ending in 'ly')>\
//  hike through the forest for <number> <units of time>. If I see a <color> <animal> while hiking,\
//  I am going to bring it home as a pet! At night we will tell <number> <silly word> stories and\
//  roast <noun (plural)> around the campfire!!"

const {storySkel, fillIns} = extractStoryAndFills(storyPattern);

function Madlib () {
    const [story, setStory] = useState(false);
    return (
       <>
       <h3> Madlibs!! </h3>
       {story ? <p> {story} </p> : <MadlibInputs storySkel={storySkel} fills={fillIns} setStoryFn={setStory} /> }
       </>
    )
}

export default Madlib
