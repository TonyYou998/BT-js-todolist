
// khai báo lớp đối tượng taskList
function TaskList() {
    // khai báo mảng đối tượng taskList
    this.arr = [];
    // phương thức addtask
    this.addTask = function (task) {
        // console.log(task);
        console.log("run here");
        this.arr.push(task);
    }
    // phương thức tìm vị trí
    this.timViTri = function (id) {
        // console.log(id);
        var viTri = -1;
        this.arr.forEach(function (item, index) {


            if (item.id == id) {
                viTri = index;

            }


        });
        // console.log(viTri);
        return viTri;

    }
    this.deleteTask = function (id) {
        // console.log(id);
        var index = this.timViTri(id);
        if (index != -1)
            this.arr.splice(index, 1);
    }
    this.getTaskbyId = function (id) {
        var task;
        // console.log(id);
        this.arr.forEach(function (item) {
            if (item.id == id) {
                task = item;
            }
        });
        return task;
    }

}