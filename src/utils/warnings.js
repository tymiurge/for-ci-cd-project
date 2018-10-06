const notToUse = (compName, funcName) => {
    console.warn(`${compName}: ${funcName} default property should never be used.`)
}


export { notToUse }