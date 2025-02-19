import { Routes, Route } from 'react-router-dom';
import { RecipientsIndexPage } from './RecipientsIndexPage.tsx';
import { RecipientShowPage } from './RecipientShowPage.tsx';

export const RecipientsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RecipientsIndexPage />} />
      <Route path="/:id" element={<RecipientShowPage />} />
    </Routes>
  );
};