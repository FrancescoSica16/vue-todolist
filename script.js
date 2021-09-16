var app = new Vue({
    el:"#app",

    data: {
        toDoList: [
            {
                nome: "provola",
                completed: false,
            },
            {
                nome: "acdaasd",
                completed: false,
            },
            {
                nome: "trie",
                completed: false,
            },
            {
                nome: "casa",
                completed: false,
            },
            {
                nome: "cosos",
                completed: false,
            },
            

            // "patate","cipolle","tonno","pasta","formaggio grana","piselli"
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
        },
        itemComplete : function (index) {
            this.toDoList[index].completed = true;
            console.log(this.toDoList[index].completed)
        }
    },


}) 