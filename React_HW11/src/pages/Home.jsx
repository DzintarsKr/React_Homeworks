import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Добро пожаловать в мой Блог! 🚀</h1>
      <p>Это главная страница React-приложения.</p>
      <hr />
      <Link to="/posts" style={{ fontSize: '18px', fontWeight: 'bold' }}>
        Читать статьи →
      </Link>
    </div>
  );
}

export default Home;
