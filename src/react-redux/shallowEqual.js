const shallowEqual = (object1, object2) => {
    for (const key in object1) {
        if (object1.hasOwnProperty(key)) {
            if (!object2.hasOwnProperty(key)) return false;
            else if (object1[key] !== object2[key]) return false;
        }
    }
    return true;
};

export default shallowEqual;
