export function StateRemovePointer(state, id){
    const removePointer = state.filter((element) => 
        element.id !== id
    )
    return removePointer
}