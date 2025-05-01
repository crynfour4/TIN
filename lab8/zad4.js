let something = ['Jajco', 'JavaScript', 'Watermelon'];

const filterStringsByLength = (array, length) => {
    return array.filter(value => value.length > length);
};

console.log(filterStringsByLength(something, 6));