export function StateRemovePointer(state){
    const removePointer = state.filter((element) => 
        element.draggable !== true
    )
    return removePointer
}