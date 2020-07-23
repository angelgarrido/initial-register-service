import { I18n } from 'aws-amplify';
export const authConfig = {
    hiddenDefaults: [
        'phone_number',
        'email'
    ],
};
const authScreenLabels = {
    es: {
        'Sign in to your account': 'Accede a la administración de restaurantes',
        'Enter your username': 'Introduce tu correo electrónico',
        'Username': 'Correo electrónico',
        'Username *': 'Correo electrónico *',
        'Password': 'Contraseña',
        'Password *': 'Contraseña *',
        'Enter your password': 'Introduce tu contraseña',
        'Forgot your password?': '¿Olvidaste tu contraseña?',
        'Reset password': 'Resetear tu contraseña',
        'No account?': '¿No tienes cuenta?',
        'Have an account?': '¿Ya tienes cuenta?',
        'Create account': 'Crea tu cuenta',
        'Create Account': 'Crea tu cuenta',
        'Create a new account': 'Crea una cuenta nueva',
        'Sign In': 'Acceder',
        'Sign in': 'Acceder',
        'Password did not conform with policy: Password not long enough':'Error de password: La contraseña no es suficientemente larga',
        'An account with the given email already exists.':'Ya existe una cuenta con ese correo electrónico',
        'Confirm Sign up':'Confirmar registro',
        'Confirmation Code':'Código de confirmación',
        'Enter your code':'Introduce tu código',
        'Lost your code?':'¿Has perdido tu código?',
        'Resend Code':'Reenviar código',
        'Confirm':'Confirmar',
        'Back to Sign In':'Volver a la página de acceso',
    }
};
I18n.setLanguage('es');
I18n.putVocabularies(authScreenLabels);