// khai báo lớp đối tượng validation
function Validation() {
    // khai báo phương thức kiểm tra rổng
    this.kiemTraRong = function (input, spanID, mess) {

        if (input === "") {

            getElement(spanID).style.display = "block";
            getElement(spanID).innerHTML = mess;
            return false
        }
        getElement(spanID).style.display = "none";

        return true;
    }
    // khai báo phương thức kiểm tra trùng tên
    this.kiemTraTrung = function (input, spanID, mess, taskList) {

        var isStatus = false;
        for (var i = 0; i < taskList.arr.length; i++) {

            if (taskList.arr[i].taskName === input)
                isStatus = true;

        }
        console.log(isStatus);
        if (isStatus) {
            getElement(spanID).style.display = "block";
            getElement(spanID).innerHTML = mess;
            return false;
        }
        getElement(spanID).style.display = "none";
        getElement(spanID).innerHTML = "";
        return true;
    }
}