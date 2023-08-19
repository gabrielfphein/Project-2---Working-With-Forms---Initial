members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMembers:{
            
            }
        }
    },
    methods:{
        addMember: function() {
            this.members.push(this.newMembers);
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
