/**
 * Generare 10 email e stamparle a schermo utilizzando Vue, Axios 
 * */ 
const app = new Vue ({
    el: '#app',
    data: {
        listEmail: [],
    },
    created() {
        this.emailGenerator();
    },
    methods: {
        // LOOP FOR CREATE 10 EMAIL
        emailGenerator() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                // handle success
                this.listEmail.push(response.data.response);
                })
                .catch( (error) => {
                // handle error
                console.log(error);
                });                
            };
        },
    },
});