import LanguageSwitcher from '../languageSwitcher/index';
import TextComponent from '../textComponent/index';

function MainComponent() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '10px'
    }}>
      <TextComponent />
      <LanguageSwitcher />
    </div>
  );
}

export default MainComponent;
