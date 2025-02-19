import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../features/auth/routes';
import { RecipientsRoutes } from '../features/recipients/routes';
import { NotFoundPage } from '../components/shared/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-in/*" element={<AuthRoutes />} />
      <Route path="/recipients/*" element={<RecipientsRoutes />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};