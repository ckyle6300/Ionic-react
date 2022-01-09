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
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext, useRef, useState } from 'react';
import { camera } from 'ionicons/icons';
import styles from './NewMemory.module.css';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import imageToBase64 from 'image-to-base64';
import MemoriesContext from '../data/memories-context';
import { useHistory } from 'react-router';

const NewMemory: React.FC = () => {
  const [takenPhoto, setTakenPhoto] =
    useState<{ path: string; preview: string }>();
  const [chosenMemoryType, setChosenMemoryType] = useState<'good' | 'bad'>(
    'good'
  );
  const titleRef = useRef<HTMLIonInputElement>(null);
  const history = useHistory();

  const memoriesCtx = useContext(MemoriesContext);

  const selectMemoryTypeHandler = (event: CustomEvent) => {
    const selectedMemoryType = event.detail.value;
    setChosenMemoryType(selectedMemoryType);
  };

  const takePhotoHandler = async () => {
    const photo = await Camera.getPhoto({
      quality: 80,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      width: 500,
    });

    if (!photo || !photo.path || !photo.webPath) {
      return;
    }

    setTakenPhoto({
      path: photo.path,
      preview: photo.webPath,
    });
  };

  const addMemoryHandler = async () => {
    const enteredTitle = titleRef.current?.value;

    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length == 0 ||
      !takenPhoto ||
      !chosenMemoryType
    ) {
      return;
    }

    const fileName = new Date().getTime() + '.jpeg';

    const base64 = await imageToBase64(takenPhoto!.preview);

    try {
      const writeFile = async () => {
        await Filesystem.writeFile({
          path: fileName,
          data: base64,
          directory: Directory.Data,
        });
      };
    } catch (error) {
      console.log(error);
    }

    memoriesCtx.addMemory(fileName, enteredTitle.toString(), chosenMemoryType);
    history.replace('/good-memories');
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
                <IonInput type='text' ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonSelect onIonChange={selectMemoryTypeHandler} value='good'>
                <IonSelectOption value='good'>Good Memory</IonSelectOption>
                <IonSelectOption value='bad'>Bad Memory</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className='ion-text-center'>
            <IonCol>
              <div className={styles.imagePreview}>
                {!takenPhoto && <h3>No Photo Chosen</h3>}
                {takenPhoto && <img src={takenPhoto.preview} alt='Preview' />}
              </div>
              <IonButton fill='clear' onClick={takePhotoHandler}>
                <IonIcon icon={camera} slot='start' />
                <IonLabel>Take Photo</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className='ion-margin-top'>
            <IonCol className='ion-text-center'>
              <IonButton onClick={addMemoryHandler}>Add Memory</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default NewMemory;
