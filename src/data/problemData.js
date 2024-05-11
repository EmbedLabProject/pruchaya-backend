
let processingProb = [];
let solvedProb = [];

export function isProcessing(id){
    return processingProb.includes(id);
}

export function isSolved(id){
    return solvedProb.includes(id);
}

export function setProcessing(id){
    solvedProb = solvedProb.filter((i) => i != id);
    if (!processingProb.includes(id)){
        processingProb.push(id);
    }
    console.log(processingProb);
}

export function setSolved(id){
    processingProb = processingProb.filter((i) => i != id);
    if (!solvedProb.includes(id)){
        solvedProb.push(id);
    }
    console.log(solvedProb);
}

export function setOngoing(id){
    solvedProb = solvedProb.filter((i) => i != id);
    processingProb = processingProb.filter((i) => i != id);
}
