function cal() {
    let foodSelect = document.getElementById("foodSelect");
    let selectedFood = foodSelect.options[foodSelect.selectedIndex].text;
    
    let quantity = document.getElementById("quantity").value;

    if (!quantity || selectedFood === "اختر الاكل" || selectedFood === "اختر") {
        window.alert("برجاء اختيار الوجبة وحدد الكمية!");
        return;
    }

    let price = 0;

    // سعرل
    switch (selectedFood) {
        case "كشرى":
            price = 50;
            break;
        case "طاجن مكرونة بالفراخ":
            price = 450;
            break;
        case "طاجن مكرونة باللحمة المفرومة":
            price = 350;
            break;
        case "كبده":
            price = 200;
            break;
        case "طاجن كوارع بالبصل":
            price = 160;
            break;
        case "ملوخية بالأرانب / الفراخ":
            price = 250;
            break;
        case "طاجن مسقعة باللحمة المفرومة":
            price = 150;
            break;
        case "ممبار مصري":
            price = 100;
            break;
           
            // العصاير
        case "كوكتيل":
            price = 50;
            break;
        case "عصير ليمون":
            price = 10;
            break;
        case "عصير البرتقال":
            price = 10;
            break;
        case "عصير العنب":
            price = 25
            break;
        case "عصير الرمان":
            price = 10
            break;
        case "عصير جوافة":
            price = 20;
            break;
        case "عصير خوخ":
            price = 15;
            break;
        default:
            price = 0;
            break;
    }

    let totalPrice = price * Number(quantity);

    window.alert(`طلبك هو: ${quantity} من (${selectedFood})\nسعر الوحدة: ${price} ج.م\nالإجمالي: ${totalPrice} ج.م`);
}