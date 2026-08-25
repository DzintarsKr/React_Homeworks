import { Link } from 'react-router-dom';

// Выносим массив статей, добавляя поле text. 
// Мы экспортируем его, чтобы файл Post.jsx тоже мог брать отсюда данные.
export const articlesData = [
    { id: 1, title: 'Изучаем React в 2026 году', text: 'React продолжает развиваться! В 2026 году хуки и серверные компоненты стали стандартом разработки, а Vite делает сборку мгновенной.' },
    { id: 2, title: 'Почему Vite такой быстрый?', text: 'Vite использует native ESM для работы в режиме разработки. Он не пересобирает весь проект при изменении одного файла, а обновляет только нужный модуль (HMR).' },
    { id: 3, title: 'Секреты react-router-dom', text: 'Хуки useParams и useNavigate позволяют создавать гибкую навигацию. Вы можете динамически перенаправлять пользователя после отправки формы или клика на кнопку.' },
];

function Blog() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Список статей 📝</h1>
            <p>Выберите интересующую вас тему:</p>
            <ul>
                {articlesData.map((post) => (
                    <li key={post.id} style={{ margin: '10px 0' }}>
                        <Link to={`/posts/${post.id}`} style={{ color: '#007bff', textDecoration: 'none', fontSize: '18px' }}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
