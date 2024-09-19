import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

const handler= NextAuth({
    providers:[
        CredentialsProvider({
            name:"Email",
            credentials:{
                username:{label:'email',type:"text",placeholder:'Email'},
                password:{label:'password',type:"text",placeholder:"Password"},
            },
            async authorize(credentials:any){
                console.log(credentials)
                return {
                    id:"user1",
                    name:"ubaid",
                    email:"syedd@gmail.com"
                }
            }
        })
    ]
});

export const GET=handler;
export const POST=handler;