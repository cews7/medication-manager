import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './features/auth/routes';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';
export const App = () => {
  return (
   <BrowserRouter>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <AuthRoutes />
      </SignedIn>
    </BrowserRouter>
  );
};