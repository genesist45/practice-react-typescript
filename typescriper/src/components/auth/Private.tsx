import Login from './Login'
import type { ProfileProps } from './Profile';

interface PrivateProps {
    isLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>;
    // Ang 'component' nga prop kay nagdawat og React component
    // nga nag-require og 'ProfileProps' nga props. (in this case, name:string)
}

function Private({ isLoggedIn, component: Component }: PrivateProps) {
    // Ang 'component: Component' syntax kay nag-rename sa 'component' prop to 'Component',
    // para magamit nato siya as a React component <Component />
    // 'Component' diri kay dili siya object, kundi usa siya ka functional or class component nga base sa ProfileProps.

    if (isLoggedIn) {
        return <Component name="hunter" />;
        // Kung true ang isLoggedIn, i-render nato ang component nga gihatag (Profile)
        // og ihatag nato ang 'name' nga prop nga required sa ProfileProps
    } else {
        return <Login />;
        // Kung false ang isLoggedIn, i-render lang nato ang Login component
    }
}

export default Private;
