var app = new Vue({
    el: "#people",
    data: {
        
        tableData: [
            { id: "John", name: "John Doe", role: "gcm-user" },
            { id: "Jane", name: "Jane Hello", role: "gcm-admin" },
            { id: "Susan", name: "Susan Kim", role: "gcm-fo" },
            { id: "Chris", name: "Chris Cho", role: "petr-it-admin" },
            { id: "Dan", name: "Dan Paddock", role: "petr-it-security" }
        ],
        roles: ['Choose', 'gcm-user', 'gcm-admin', 'petr-it-security', 'petr-it-admin', 'gcm-fo'],
        columns: {
            id: {
                displayname: "id",
                sortorder: 1
            },
            name: {
                displayname: "name",
                sortorder: 1
            },
            role: {
                displayname: "role",
                sortorder: 1
            }
        },
        
        user: {
            id: '',
            name: '',
            role: 'Choose'
        }
    },
    computed: {
       tableFilter: function() {
         return this.tableData.filter(user => {
             return user.id.toLowerCase().indexOf(this.user.id.toLowerCase()) > -1
         })
       }
    },
    methods: {
        addUser: function(event) {
            event.preventDefault();
            this.$root.tableData.push(this.user);
            // reset new user
            this.user = {
                id: '',
                name: '',
                role: 'Choose'
            }
        },
    }
});