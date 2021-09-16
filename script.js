var app = new Vue({
    el:"#app",

    data: {
        toDoList: [
            "patate","cipolle","tonno","pasta","formaggio grana","piselli"
        ],
        field : "",
    },

    methods:{
        deleteItem : function (index) {
            this.toDoList.splice(index, 1);
            console.log(this.toDoList)
        },
        addItem : function () {
            if (this.field.trim("").length > 0) {
                this.toDoList.push(this.field);
                this.field = "";  
            }
            
        }
    },


}) 