const notToUse = (compName, funcName) => {
    console.warn(`${compName}: ${funcName} default property should never be used.`)
}

const warnings = {
  notToUse
}

export default warnings
