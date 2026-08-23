import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

function DynamicForm() {
  // Инициализируем хук useForm для управления формой, валидации и отслеживания
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm({
    mode: 'onChange' // Валидация будет срабатывать в реальном времени при вводе текста
  });

  // Функция onSubmit обрабатывает успешную отправку формы
  const onSubmit = (data) => {
    console.log("Данные формы успешно отправлены:", data);
    alert("Форма успешно отправлена!");
  };

  // Используем watch для отслеживания значения первого поля ввода в реальном времени
  const firstInputValue = watch('firstField', '');

  // Условие отображения второго поля: значение первого поля должно быть длиннее 4 символов
  const isSecondFieldVisible = firstInputValue.length >= 5;

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Динамическая форма</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
        {/* Блок первого поля ввода */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Первое поле (минимум 5 символов):</label>
          <input
            type="text"
            className={`${styles.input} ${errors.firstField ? styles.inputError : ''}`}
            placeholder="Начните вводить текст..."
            {...register('firstField', { 
              required: 'Это поле обязательно для заполнения',
              minLength: { value: 5, message: 'Минимальная длина — 5 символов' } 
            })}
          />
          {errors.firstField && (
            <span className={styles.errorText}>{errors.firstField.message}</span>
          )}
        </div>

        {/* Условный рендеринг: второе поле появляется только при выполнении условия */}
        {isSecondFieldVisible && (
          <div className={styles.inputGroup}>
            <label className={styles.label}>Второе поле:</label>
            <input
              type="text"
              className={`${styles.input} ${errors.secondField ? styles.inputError : ''}`}
              placeholder="Теперь введите данные сюда..."
              {...register('secondField', { 
                required: 'Это поле также необходимо заполнить' 
              })}
            />
            {errors.secondField && (
              <span className={styles.errorText}>{errors.secondField.message}</span>
            )}
          </div>
        )}

        {/* Кнопка отправки формы */}
        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
