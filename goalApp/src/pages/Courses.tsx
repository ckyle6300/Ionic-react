import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const Courses: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>this works --courses page</h2>
        <div>
          <IonButton routerLink='/course-goals'>To course Goals</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
