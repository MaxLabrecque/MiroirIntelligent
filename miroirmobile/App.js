import Navigator from './src/Navigator';

//Il faut laisser cette ligne, si non, l'application ne se lance pas.
import * as encoding from 'text-encoding';
import ConfigProvider from 'miroirPackage/Contexts/ConfigContext';

export default function App() {

  return (
    <ConfigProvider>
    <Navigator />
    </ConfigProvider>
  );
};
