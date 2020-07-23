import React from 'react';
import { Header } from '../components/header';
import { authConfig } from '../config/authConfig';
import { ContentAdmin } from '../components/contentAdmin';
import { AmplifySignOut,AmplifySignUp, AmplifyAuthenticator } from '@aws-amplify/ui-react';


function PageAdmin() {
    return (
        <div className="page">
            <Header />
            <div className="center">
                <AmplifyAuthenticator>
                <AmplifySignUp
                    slot="sign-up"
                    usernameAlias="email"
                    formFields={[
                    {
                        type: "email",
                        label: "Correo electrónico *",
                        placeholder: "Introduce tu correo electrónico",
                        required: true,
                    },
                    {
                        type: "password",
                        label: "Contraseña *",
                        placeholder: "Introduce tu password",
                        required: true,
                    },
                    ]} 
                />
                    <ContentAdmin />
                    <AmplifySignOut/>
                </AmplifyAuthenticator>
            </div>
        </div>
    );
  }
  
  export default PageAdmin;