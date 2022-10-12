

export const totalBasket = (arr)  => {

    let total;

    if(arr.length >= 1) {
        total = arr.reduce((sum, total) => {
            return sum + total.count
        }, 0)
    } else {
        total = 0;
    }

    return total;

}