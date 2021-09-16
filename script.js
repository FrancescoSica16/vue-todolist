var app = new Vue({
    el:"#app",

    data: {
        toDoList: [
            "patate","cipolle","tonno","pasta","formaggio grana","piselli"
        ],
    },

    methods:{
        deleteItem : function (index) {
            this.toDoList.splice(index, 1);
            console.log(this.toDoList)
        },
    },
}) 