import {
  IonApp,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  isPlatform,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import React from 'react';
import { add } from 'ionicons/icons';

const BadMemory: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          {isPlatform('ios') && (
            <IonButtons slot='end'>
              <IonButton routerLink='/new-memories'>
                <IonIcon slot='icon-only' icon={add} />
              </IonButton>
            </IonButtons>
          )}
          <IonTitle>Bad Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p className='ion-text-center'>Hello from Bad Memory Page</p>
        {!isPlatform('ios') && (
          <IonFab vertical='bottom' horizontal='end'>
            <IonFabButton routerLink='/new-memories'>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default BadMemory;
