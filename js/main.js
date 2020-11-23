/**
 * Generare 10 email e stamparle a schermo utilizzando Vue, Axios 
 * */ 
const app = new Vue ({
    el: '#app',
    data: {

    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
        // handle success
        console.log(response.data.response);
        })
        .catch( (error) => {
        // handle error
        console.log(error);
        });
    },
    methods: {

    },
});