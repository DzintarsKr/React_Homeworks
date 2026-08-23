import { useForm, useWatch } from 'react-hook-form'; // Импортируем хук useWatch
import styles from './styles.module.css';

function DynamicForm() {
  const { 
    register, 
    handleSubmit, 
    control, // Достаем объект control для отслеживания
    formState: { errors } 
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log("Данные формы успешно отправлены:", data);
    alert("Форма успешно отправлена!");
  };

  // Исправление: используем хук useWatch вместо вызова watch()
  const firstInputValue = useWatch({
    control,
    name: 'firstField',
    defaultValue: ''
  });

  const isSecondFieldVisible = firstInputValue.length >= 5;

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Динамическая formContainer</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
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

        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default DynamicForm;
