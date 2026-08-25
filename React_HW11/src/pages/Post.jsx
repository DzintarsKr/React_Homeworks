// 1. Импортируем хуки useParams и useNavigate из react-router-dom
import { useParams, useNavigate } from 'react-router-dom';
// Импортируем массив с данными статей из соседнего файла
import { articlesData } from './Blog';

function Post() {
  // 2. Извлекаем параметр id из URL-адреса
  const { id } = useParams();
  
  // 3. Инициализируем хук useNavigate для программной навигации
  const navigate = useNavigate();

  // Находим статью в массиве по её ID (переводим id из строки в число через Number)
  const currentArticle = articlesData.find(article => article.id === Number(id));

  // Если статья с таким ID не найдена в массиве data
  if (!currentArticle) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Статья не найдена 😢</h2>
        <p>К сожалению, статьи с ID {id} не существует.</p>
        <button onClick={() => navigate('/posts')} style={{ padding: '8px 12px', cursor: 'pointer' }}>
          Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Отображаем динамический заголовок и текст статьи */}
      <h1>{currentArticle.title} 📖</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', margin: '20px 0' }}>
        {currentArticle.text}
      </p>
      
      <hr />
      
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        {/* 4. Используем navigate(-1) для перемещения на один шаг назад по истории браузера */}
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#6c757d', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          ← Назад 
        </button>

        {/* Пример динамического перехода на конкретный адрес по клику на кнопку */}
        <button 
          onClick={() => navigate('/')} 
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#007bff', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          На главную
        </button>
      </div>
    </div>
  );
}

export default Post;
