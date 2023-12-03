import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ToDos } from '@/features/todos/routes/ToDos';

const ToDosRoutes = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="" element={<ToDos />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  );
};

export { ToDosRoutes };
