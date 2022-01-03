import { IonButton, IonCol, IonIcon, IonRow } from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';
import React from 'react';

const BmiControls: React.FC<{ onCalulate: () => void; onReset: () => void }> = (
  props
) => {
  return (
    <IonRow className='ion-margin-top'>
      <IonCol size='12' sizeSm='6' className='ion-text-center'>
        <IonButton
          size='large'
          expand='block'
          color='secondary'
          onClick={props.onCalulate}
        >
          <IonIcon slot='start' icon={calculatorOutline} />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol size='12' sizeSm='6' className='ion-text-center'>
        <IonButton onClick={props.onReset} fill='clear' color='medium'>
          <IonIcon slot='start' icon={refreshOutline} />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
