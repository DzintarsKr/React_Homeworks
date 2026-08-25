// Импортируем компоненты маршрутизации из библиотеки react-router-dom
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// Импортируем созданные нами страницы
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';

// Простой компонент для несуществующих страниц (404 Not Found)
function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Ошибка 404 🔍</h2>
      <p>Ой! Такой страницы не существует.</p>
      <NavLink to="/" style={{ color: '#007bff' }}>Вернуться на главную</NavLink>
    </div>
  );
}

function App() {
  return (
    // Оборачиваем приложение в BrowserRouter для работы роутинга
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Главная навигационная панель (Шапка сайта) */}
        <nav style={{ 
          padding: '15px 20px', 
          backgroundColor: '#222', 
          display: 'flex', 
          gap: '20px',
          borderRadius: '0 0 8px 8px',
          marginBottom: '20px'
        }}>
          {/* NavLink автоматически проверяет текущий URL и применяет стили к активной вкладке */}
          <NavLink 
            to="/" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4caf50' : '#fff', 
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Главная
          </NavLink>
          
          <NavLink 
            to="/posts" 
            style={({ isActive }) => ({ 
              color: isActive ? '#4caf50' : '#fff', 
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Все статьи
          </NavLink>
        </nav>

        {/* Секция контента, где react-router-dom будет менять страницы */}
        <main style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <Routes>
            {/* Маршрут для Главной страницы */}
            <Route path="/" element={<Home />} />
            
            {/* Маршрут для Списка статей */}
            <Route path="/posts" element={<Blog />} />
            
            {/* Динамический маршрут для Отдельной статьи (:id принимает любое значение) */}
            <Route path="/posts/:id" element={<Post />} />
            
            {/* Маршрут-заглушка для любых других несуществующих URL */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
