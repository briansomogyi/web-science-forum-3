export default {
    // Extend ESLint with Vue.js 3 strongly recommended rules
    extends:[
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:prettier/recommended',
    ],

    // Define the parser and environment
    parserOptions:{
        ecmaVersion:2021,
        sourceType:'module',
    },
    env:{
        browser:true,
        node:true,
    },

    // Define general rules
    rules:{
        'no-console':'warn',
        'no-unused-vars':'error',
        'vue/html-self-closing':[
            'error',
            {
                html:{
                    void:'always',
                    normal:'never',
                },
            },
        ],
    },

    // Place the overrides block here
    overrides:[
        {
            files:['*.vue', '*.js'], // Apply to Vue and JS files
            rules:{
                'prettier/prettier':'error', // Treat Prettier errors as ESLint errors
            },
        },
    ],
}
