import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react';
import React from 'react';
import styles from './BmiResult.module.css';

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard className={styles.result}>
          <IonCardContent className='ion-text-center'>
            <h2>Your Body Mass Index</h2>
            <h3>{props.result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
