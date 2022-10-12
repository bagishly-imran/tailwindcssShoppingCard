export const totalAllPrice = (arr) => {

    let total

    if(arr.length >= 1) {

        total = arr.reduce((sum, total) => {
            return sum + (total.discount_price * total.count)
        }, 0)

    } else {total = 0;}

    return total;
}
