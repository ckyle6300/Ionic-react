import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const NewMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/new-memories' />
          </IonButtons>
          <IonTitle>New Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='ion-text-center'>Hello from New Memory Page</p>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
