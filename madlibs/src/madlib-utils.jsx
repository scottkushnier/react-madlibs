

// Takes skeleton text story & extracts pieces to be filled in,
// as well as surrounding text.
// Two arrays of text are returned.
// For example, for pattern "My name is <name>. I am a <adj> <noun>."
//     story skeleton array:      'My name is '
//                                '. I am a '
//                                '.'
//     fill-in array:    'name'
//                       'adj'
//                       'noun'
function extractStoryAndFills(text) {
   let storySkel = [];
   let fillIns = [];
   let inStory = true;
   let storyInd = 0;
   let fillInInd = 0;
   let firstFillIn = true;     // leave fillInInd at 0 on first fill-in
   storySkel[0] = '';
   fillIns[0] = '';
   for (let i=0; i<text.length; i++) {
     if (text[i] == '<') {
        inStory = false;
        if (!firstFillIn) {
           fillInInd++;
        } else {
           firstFillIn = false;
        }
        fillIns[fillInInd] = '';
     } else if (text[i] == '>') {
        inStory = true;
        storyInd++;
        storySkel[storyInd] = '';
     } else {
        if (inStory) {
         storySkel[storyInd] += text[i];
        } else {
            fillIns[fillInInd] += text[i];
        }
     }
   }
   // console.log({storySkel, fillIns});
   return({storySkel, fillIns});
}

// Given story skeleton and list of fill-in values, reconstructs the story.
function buildStory(skel, vals) {
   // console.log('skel: ', skel, 'vals: ', vals);
   let acc = "";
   for (let i=0; i<skel.length; i++) {
       acc += skel[i];
       if (vals[i]) {
          acc += vals[i];
       }
   }
   return(acc);
}

export { extractStoryAndFills, buildStory }