import {
  IonApp,
  IonCard,
  IonCardContent,
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
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import Home from "./pages/Home";
import BmiControls from "./components/BmiControls";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { useRef, useState } from "react";
import BmiResult from "./components/BmiResult";

setupIonicReact();

const App: React.FC = () => {
  const weightInput = useRef<HTMLIonInputElement>(null);
  const heightInput = useRef<HTMLIonInputElement>(null);
  const [calculatedBMI, setCalculateBMI] = useState<number>();

  const calculateBMI = () => {
    const enteredWeight = weightInput.current!.value;
    const enteredHeight = heightInput.current!.value;

    if (!enteredHeight || !enteredWeight) {
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    console.log(bmi);
    setCalculateBMI(bmi);
  };

  const resetInputs = () => {
    weightInput.current!.value = "";
    heightInput.current!.value = "";
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Hieght</IonLabel>
                <IonInput ref={heightInput}></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Your Weight</IonLabel>
                <IonInput ref={weightInput}></IonInput>
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
  );
};

export default App;
