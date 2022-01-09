import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useContext } from 'react';
import MemoriesContext from '../data/memories-context';

const GoodMemory: React.FC = () => {
  const memoriesCtx = useContext(MemoriesContext);

  const goodMemories = memoriesCtx.memories.filter(
    (memory) => memory.type === 'good'
  );

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
          <IonTitle>Good Memory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {goodMemories.length == 0 && (
            <IonRow>
              <IonCol className='ion-text-center'>
                <h2>No Memories Found</h2>
              </IonCol>
            </IonRow>
          )}
          {goodMemories.map((memory) => (
            <IonRow key={memory.id}>
              <IonCol>
                <IonCard>
                  <img src={memory.imagePath} alt={memory.title} />
                  <IonCardHeader>
                    <IonCardTitle>{memory.title}</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
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

export default GoodMemory;
