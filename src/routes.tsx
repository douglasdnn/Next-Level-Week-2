import React from 'react';
// a próxima importação permite devolver um mapa de rotas, quando se chama a função com <Routes />
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
    return (
        <BrowserRouter>
            {/* aqui tem que usar o "exact", porque o "/"" vem embutido também em todas as outras routes */}
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;