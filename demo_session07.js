// Hàng đợi ban đầu: ['30A-111', '29B-222', '51C-333'].
let products = ['30A-111', '29B-222', '51C-333'];
console.log("mang ban dau",[...products]);
// Xe mới đến: '43D-444' (push).
products.push('43D-444');
console.log("mang sau khi push",[...products]);
// Xe ưu tiên: '14A-999' chèn vào chỉ số 1 (splice).
products.splice(1,0,'14A-999');
console.log("mang sau khi them",[...products]);
// Xe vào sạc: Lấy xe đầu hàng bằng shift().
let car_charging_the_battery = products.shift()
console.log("xoa xe dau tien",car_charging_the_battery);

// Mảng kWh ca trực: [30, 45, 25], đơn giá 4.500 VNĐ/kWh.
const mangKWh = [30, 45, 25]; 
const price = 4500; 

let sumKWh = 0; 

for (let i = 0; i < mangKWh.length; i++) {
    sumKWh += mangKWh[i]; 
}

let sum_price = sumKWh * price;

console.log("Tổng kWh:", sumKWh); 
console.log("Tổng doanh thu:", sum_price,  "VNĐ"); // 450.000 VNĐ