import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { camera } from 'ionicons/icons';
import styles from './NewMemory.module.css';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const NewMemory: React.FC = () => {
  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      quality: 80,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      width: 500,
    });

    console.log(photo);
  };

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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position='floating'>Memory Title</IonLabel>
                <IonInput type='text' />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className='ion-text-center'>
            <IonCol>
              <div className={styles.imagePreview}>
                <h3>No Photo Chosen</h3>
              </div>
              <IonButton fill='clear' onClick={takePhotoHandler}>
                <IonIcon icon={camera} slot='start' />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-margin-top'>
            <IonCol className='ion-text-center'>
              <IonButton>Add Memory</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
