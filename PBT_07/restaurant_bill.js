const foods = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
];

const isWednesday = true;
const hasTip = true;

let subtotal = 0;

// tính tổng

for(let i = 0; i < foods.length; i++){

    subtotal += foods[i].price * foods[i].quantity;

}

// giảm giá

let discountPercent = 0;

if(subtotal > 1000000){
    discountPercent = 15;
}
else if(subtotal > 500000){
    discountPercent = 10;
}

if(isWednesday){
    discountPercent += 5;
}

let discount = subtotal * discountPercent / 100;

// sau giảm

let afterDiscount = subtotal - discount;

// VAT

let vat = afterDiscount * 0.08;

// Tip

let tip = hasTip ? afterDiscount * 0.05 : 0;

// thanh toán

let total = afterDiscount + vat + tip;

// in hóa đơn

console.log("╔══════════════════════════════════════╗");
console.log("║         HÓA ĐƠN NHÀ HÀNG            ║");
console.log("╠══════════════════════════════════════╣");

for(let i = 0; i < foods.length; i++){

    let food = foods[i];

    let itemTotal = food.price * food.quantity;

    console.log(
        `║ ${i+1}. ${food.name} x${food.quantity} = ${itemTotal.toLocaleString()}đ`
    );

}

console.log("╠══════════════════════════════════════╣");

console.log(`║ Tổng cộng: ${subtotal.toLocaleString()}đ`);

console.log(`║ Giảm giá (${discountPercent}%): ${discount.toLocaleString()}đ`);

console.log(`║ VAT (8%): ${vat.toLocaleString()}đ`);

console.log(`║ Tip (5%): ${tip.toLocaleString()}đ`);

console.log("╠══════════════════════════════════════╣");

console.log(`║ THANH TOÁN: ${total.toLocaleString()}đ`);

console.log("╚══════════════════════════════════════╝");