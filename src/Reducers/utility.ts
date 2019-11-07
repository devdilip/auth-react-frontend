export const updateObjectImmutably = (oldObject, newValuesObject) => {
    return {
        ...oldObject,
        ...newValuesObject
    };
};