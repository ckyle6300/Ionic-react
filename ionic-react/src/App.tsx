import {
  IonAlert,
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from '@ionic/react';
import BmiControls from './components/BmiControls';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { useRef, useState } from 'react';
import BmiResult from './components/BmiResult';
import InputControl from './components/InputControl';

setupIonicReact();

const App: React.FC = () => {
  const weightInput = useRef<HTMLIonInputElement>(null);
  const heightInput = useRef<HTMLIonInputElement>(null);
  const [calculatedBMI, setCalculateBMI] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<string>('mkg');

  const calculateBMI = () => {
    const enteredWeight = weightInput.current!.value;
    const enteredHeight = heightInput.current!.value;

    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError('Please input valid info');
      return;
    }
    const weightConversion = calcUnits === 'ftlbs' ? 2.2 : 1;

    const weight = +enteredWeight / weightConversion;

    const heigthConversion = calcUnits === 'ftlbs' ? 3.28 : 1;

    const height = +enteredHeight / heigthConversion;

    const bmi = weight / (height * height);
    console.log(bmi);
    setCalculateBMI(bmi);
  };

  const resetInputs = () => {
    weightInput.current!.value = '';
    heightInput.current!.value = '';
  };

  const selectCalcHandler = (value: string) => {
    setCalcUnits(value);
  };

  return (
    <>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: 'Okay', handler: () => setError(undefined) }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selectedValue={calcUnits}
                  onSelectValue={selectCalcHandler}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>
                    Your Hieght ({calcUnits === 'mkg' ? 'meters' : 'feet'})
                  </IonLabel>
                  <IonInput type='number' ref={heightInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position='floating'>
                    Your Weight ({calcUnits === 'mkg' ? 'kilograms' : 'pounds'})
                  </IonLabel>
                  <IonInput type='number' ref={weightInput}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmiControls onCalulate={calculateBMI} onReset={resetInputs} />
            <IonRow>
              <IonCol></IonCol>
            </IonRow>
            {calculatedBMI && <BmiResult result={calculatedBMI} />}
          </IonGrid>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
