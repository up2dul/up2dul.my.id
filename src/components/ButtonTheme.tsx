import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

import Tooltip from './Tooltip';

const ButtonTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (): void => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <Tooltip content={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
      <button onClick={toggleTheme}>{theme === 'dark' ? <FiSun /> : <FiMoon />}</button>
    </Tooltip>
  );
};

export default ButtonTheme;
